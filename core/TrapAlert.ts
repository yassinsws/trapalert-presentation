
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

    // 1. Inject Global Layout Shift Styles
    const globalStyle = document.createElement('style');
    globalStyle.textContent = `
        body.trapalert-open {
            margin-right: 350px;
            transition: margin 0.3s ease;
            overflow-x: hidden;
        }
    `;
    document.head.appendChild(globalStyle);

    const container = document.createElement('div');
    container.id = 'trapalert-container';
    document.body.appendChild(container); // Append to body, not inside other elements
    this.shadowRoot = container.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
        :host {
          --ta-blue: #667eea;
          --ta-sidebar-width: 350px;
        }
        * { box-sizing: border-box; }

        .trapalert-sidebar {
          position: fixed;
          top: 0;
          right: calc(var(--ta-sidebar-width) * -1);
          width: var(--ta-sidebar-width);
          height: 100vh;
          background: linear-gradient(135deg, #1a1c2c 0%, #4a192c 100%);
          box-shadow: -4px 0 30px rgba(0, 0, 0, 0.5);
          transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2147483647; /* Max Z-Index */
          color: white;
          font-family: 'Outfit', sans-serif;
          display: flex;
          flex-direction: column;
          padding: 40px 30px;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .trapalert-sidebar.visible {
          right: 0;
        }

        .trapalert-handle {
          position: fixed;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          background: #1a1c2c;
          color: white;
          padding: 15px 8px;
          border-radius: 8px 0 0 8px;
          cursor: pointer;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.2);
          border-right: none;
          transition: padding 0.2s;
          z-index: 2147483646;
          box-shadow: -2px 0 10px rgba(0,0,0,0.3);
          display: block;
        }

        .trapalert-handle:hover {
          padding-right: 15px;
          background: #2a2c3c;
        }

        .trapalert-header {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .trapalert-icon {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .trapalert-message {
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.8);
        }

        .trapalert-score-container {
             background: rgba(0, 0, 0, 0.3);
             padding: 20px;
             border-radius: 12px;
             margin-bottom: 25px;
             border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .trapalert-score-value {
             font-size: 32px;
             font-weight: 800;
             color: #fff;
        }

        .trapalert-button {
          background: white;
          color: #1a1c2c;
          border: none;
          padding: 16px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          margin-bottom: 12px;
          width: 100%;
        }

        .trapalert-button:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }

        .trapalert-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .trapalert-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }
    `;

    const handle = document.createElement('div');
    handle.className = 'trapalert-handle';
    handle.id = 'ta-handle';
    handle.textContent = 'Report Barrier';
    handle.onclick = () => this.toggleSidebar(true);

    const sidebar = document.createElement('aside');
    sidebar.className = 'trapalert-sidebar';
    sidebar.innerHTML = `
      <button class="trapalert-close" id="ta-close">×</button>
      <div class="trapalert-header">
        <div class="trapalert-icon">🛡️</div>
        <span>TrapAlert</span>
      </div>

      <div class="trapalert-score-container">
          <div style="font-size: 11px; text-transform: uppercase; opacity: 0.6; margin-bottom: 8px;">Struggle Score</div>
          <div class="trapalert-score-value" id="score-val">0</div>
      </div>

      <div class="trapalert-message">
        We've detected potential navigation barriers. Help us improve the experience for everyone.
      </div>

      <button class="trapalert-button" id="get-help-btn">
        🎥 Record Context
      </button>
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(handle);
    this.shadowRoot.appendChild(sidebar);

    // Bind events
    this.shadowRoot.getElementById('ta-close')?.addEventListener('click', () => this.toggleSidebar(false));
    this.shadowRoot.getElementById('get-help-btn')?.addEventListener('click', () => {
      this.dispatchReport('manual');
      this.toggleSidebar(false);
    });

    // Update score display loop
    setInterval(() => {
      const el = this.shadowRoot?.querySelector('#score-val');
      if (el) el.textContent = Math.floor(this.score).toString();
    }, 500);
  }

  private triggerAlert(level: number) {
    // If triggered by heuristics, we open the sidebar automatically
    this.toggleSidebar(true);
  }

  public toggleSidebar(force?: boolean) {
    const sidebar = this.shadowRoot?.querySelector('.trapalert-sidebar');
    const handle = this.shadowRoot?.querySelector('#ta-handle') as HTMLElement;

    if (sidebar && handle) {
      const isVisible = sidebar.classList.contains('visible');
      const shouldBeVisible = force !== undefined ? force : !isVisible;

      if (shouldBeVisible) {
        sidebar.classList.add('visible');
        handle.style.display = 'none';
        document.body.classList.add('trapalert-open');
      } else {
        sidebar.classList.remove('visible');
        handle.style.display = 'block';
        document.body.classList.remove('trapalert-open');
      }
    }
  }

  // --- Reporting ---

  private async dispatchReport(type: 'auto' | 'manual') {
    const payload = {
      tenantId: this.config.tenantId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      struggleScore: Math.floor(this.score),
      description: type === 'manual' ? 'Manual user report' : 'Auto-triggered alert',
      behavioralTrace: this.navigationPath, // Using navigation path as trace for now
      context: this.captureContext(),
      metadata: this.getBrowserMetadata()
    };

    console.log('[TrapAlert] Dispatching report:', payload);
    alert('Sending Report to Dashboard...');

    try {
      // Remove trailing slash if present then append /feedback
      const baseUrl = this.config.collectorEndpoint.replace(/\/$/, "");
      const endpoint = `${baseUrl}/feedback`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log('[TrapAlert] Report sent successfully.');
        alert('Report Sent Successfully!');
        this.score = 0; // Reset
      } else {
        console.error('[TrapAlert] Report failed:', response.status);
        alert(`Report Failed (Status: ${response.status})`);
      }
    } catch (error) {
      console.error('[TrapAlert] Network error:', error);
      alert('Report Failed: Network Error');
    }
  }

  private captureContext() {
    const activeElement = document.activeElement;
    return {
      activeElement: {
        tagName: activeElement?.tagName || null,
        id: activeElement?.id || null,
        className: activeElement?.className || null,
        role: activeElement?.getAttribute('role') || null
      },
      pageTitle: document.title,
      focusHistory: this.focusHistory.slice(-5) // Last 5 focus items
    };
  }

  private getBrowserMetadata() {
    return {
      userAgent: navigator.userAgent,
      screenSize: {
        width: window.screen.width,
        height: window.screen.height
      },
      viewportSize: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      language: navigator.language,
      timestamp: Date.now()
    };
  }
}
