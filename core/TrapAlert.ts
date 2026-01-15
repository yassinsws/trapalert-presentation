
export interface TrapAlertConfig {
  tenantId: string;
  collectorEndpoint: string;
}

export class TrapAlert {
  private static instance: TrapAlert;
  private config: TrapAlertConfig;
  private score: number = 0;
  private decayRate: number = 2; // points per second
  private successDrainRate: number = 10; // points per second (during momentum)
  private isMomentumActive: boolean = false;
  private momentumTimeout: NodeJS.Timeout | null = null;
  private sensitivityMultiplier: number = 1;
  private sensitivityTimeout: NodeJS.Timeout | null = null;

  // Heuristic State
  private clickHistory: { time: number; target: EventTarget | null }[] = [];
  private focusHistory: { time: number; element: HTMLElement }[] = [];
  private navigationPath: string[] = [];
  private deadEndTabCount: number = 0;

  // UI
  private shadowRoot: ShadowRoot | null = null;

  private constructor(config: TrapAlertConfig) {
    this.config = config;
    this.init();
  }

  static init(config: TrapAlertConfig) {
    if (!TrapAlert.instance) {
      TrapAlert.instance = new TrapAlert(config);
    }
    return TrapAlert.instance;
  }

  private init() {
    // Ensure DOM is ready before accessing document.body
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }

  private start() {
    this.setupListeners();
    this.startDecayLoop();
    this.injectUI();
    console.log('TrapAlert Initialized');
  }

  private setupListeners() {
    document.addEventListener('click', this.handleClick.bind(this));
    document.addEventListener('keydown', this.handleKeydown.bind(this));
    document.addEventListener('focusin', this.handleFocus.bind(this));

    // MutationObserver for alerts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const role = node.getAttribute('role');
              const ariaLive = node.getAttribute('aria-live');
              if (role === 'alert' || ariaLive === 'assertive') {
                this.triggerErrorSensitivity();
              }
            }
          });
        }
      });
    });

    // Safety check for body
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      console.warn('TrapAlert: document.body not found for mutation observer');
    }
  }

  private startDecayLoop() {
    setInterval(() => {
      const drain = this.isMomentumActive ? this.successDrainRate : this.decayRate;
      this.updateScore(-drain); // Drain per second (approx, interval is 1s logic)
    }, 1000);
  }

  private updateScore(points: number) {
    const adjustedPoints = points > 0 ? points * this.sensitivityMultiplier : points;
    this.score = Math.max(0, this.score + adjustedPoints);

    if (this.score >= 100 && this.score < 200) {
      this.triggerAlert(1);
    } else if (this.score >= 200) {
      this.triggerAlert(2);
    }
  }

  private triggerMomentum() {
    this.isMomentumActive = true;
    this.updateScore(-10); // Instant drain

    if (this.momentumTimeout) clearTimeout(this.momentumTimeout);
    this.momentumTimeout = setTimeout(() => {
      this.isMomentumActive = false;
    }, 5000);
  }

  private triggerErrorSensitivity() {
    this.sensitivityMultiplier = 2; // Spike/Double sensitivity
    console.log("TrapAlert: Error detected, sensitivity doubled.");
  }

  // --- Event Handlers & Heuristics ---

  private handleClick(e: MouseEvent) {
    const target = e.target as HTMLElement;

    // Submission Monitoring
    if (target.getAttribute('type') === 'submit' || target.closest('button[type="submit"]')) {
      this.isMomentumActive = false;
      this.sensitivityMultiplier = 2;
      if (this.sensitivityTimeout) clearTimeout(this.sensitivityTimeout);
      this.sensitivityTimeout = setTimeout(() => {
        this.sensitivityMultiplier = 1;
      }, 30000);
    }

    // Success Momentum (Productive action) - simple check
    if (!this.isRageClick(e)) {
      this.triggerMomentum();
    }
  }

  private isRageClick(e: MouseEvent): boolean {
    const now = Date.now();
    this.clickHistory.push({ time: now, target: e.target });

    // Keep only last 2 seconds
    this.clickHistory = this.clickHistory.filter(c => now - c.time < 2000);

    const clicks = this.clickHistory.filter(c => c.target === e.target);
    const target = e.target as HTMLElement;
    const isInteractive = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.onclick != null || target.getAttribute('role') === 'button';

    if (clicks.length > 5 && !isInteractive) {
      console.log("TrapAlert: Rage Click detected");
      this.updateScore(60);
      this.clickHistory = []; // Reset to avoid continuous triggers
      return true;
    }
    return false;
  }

  private handleKeydown(e: KeyboardEvent) {
    // Manual Trigger
    if (e.altKey && e.key === 't') {
      this.toggleSidebar();
    }

    // Momentum on typing
    this.triggerMomentum();
  }

  private handleFocus(e: FocusEvent) {
    const target = e.target as HTMLElement;
    this.focusHistory.push({ time: Date.now(), element: target });

    this.deadEndTabCount++;
    if (this.deadEndTabCount > 15) {
      console.log("TrapAlert: Dead-end tab detected");
      this.updateScore(40);
      this.deadEndTabCount = 0;
    }
  }

  // --- UI Injection ---

  private injectUI() {
    if (!document.body) return;

    const container = document.createElement('div');
    container.id = 'trapalert-container';
    document.body.appendChild(container);
    this.shadowRoot = container.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
          :host { all: initial; }
          .trap-ghost {
              position: fixed;
              bottom: 20px;
              right: 20px;
              background: #1a1a1a;
              color: white;
              padding: 16px;
              border-radius: 12px;
              font-family: system-ui, sans-serif;
              box-shadow: 0 10px 25px rgba(0,0,0,0.2);
              z-index: 99999;
              transform: translateY(150%);
              transition: transform 0.3s ease-out;
              max-width: 300px;
              border: 1px solid #333;
          }
          .trap-ghost.visible {
              transform: translateY(0);
          }
          .trap-score {
              font-size: 12px;
              color: #888;
              margin-bottom: 8px;
          }
          .trap-title {
              font-weight: bold;
              margin-bottom: 4px;
              display: flex;
              align-items: center;
              gap: 8px;
          }
          .trap-icon {
              color: #FFD700;
          }
          .trap-btn {
              background: #FFD700;
              color: black;
              border: none;
              padding: 8px 12px;
              border-radius: 6px;
              margin-top: 12px;
              cursor: pointer;
              font-weight: 600;
              width: 100%;
          }
      `;

    const ui = document.createElement('div');
    ui.className = 'trap-ghost';
    ui.innerHTML = `
          <div class="trap-score">Struggle Score: <span id="score-val">0</span></div>
          <div class="trap-title">
             <span class="trap-icon">⚠️</span> Stuck?
          </div>
          <div class="trap-msg">We noticed you might be having trouble. Need help?</div>
          <button class="trap-btn">Get Assistance</button>
      `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(ui);

    // Update score display loop
    setInterval(() => {
      const el = this.shadowRoot?.querySelector('#score-val');
      if (el) el.textContent = Math.floor(this.score).toString();
    }, 500);

    ui.querySelector('.trap-btn')?.addEventListener('click', () => {
      alert('Generating Report to: ' + this.config.collectorEndpoint);
      this.score = 0; // Reset
      this.toggleSidebar(false);
    });
  }

  private triggerAlert(level: number) {
    const ui = this.shadowRoot?.querySelector('.trap-ghost');
    if (ui && !ui.classList.contains('visible')) {
      ui.classList.add('visible');
    }
  }

  public toggleSidebar(force?: boolean) {
    const ui = this.shadowRoot?.querySelector('.trap-ghost');
    if (ui) {
      if (force !== undefined) {
        force ? ui.classList.add('visible') : ui.classList.remove('visible');
      } else {
        ui.classList.toggle('visible');
      }
    }
  }
}
