
export interface TeamMember {
  name: string;
  role: string;
  contribution: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HOME = 'home',
  PROBLEM = 'problem',
  SOLUTION = 'solution',
  DEMO = 'demo',
  SYSTEMIC = 'systemic',
  REFLECTION = 'reflection',
  IMPACT = 'impact',
  TEAM = 'team',
  APPENDIX = 'appendix'
}
