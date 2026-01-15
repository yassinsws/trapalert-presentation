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
  IMPACT = 'impact',
  REFLECTION = 'reflection',
  TEAM = 'team',
  APPENDIX = 'appendix'
}