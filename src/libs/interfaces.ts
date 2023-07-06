export interface DateTimeFormatOptions {
  localeMatcher?: 'lookup' | 'best fit';
  weekday?: 'long' | 'short' | 'narrow';
  era?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'long' | 'short';
  formatMatcher?: 'basic' | 'best fit';
  hour12?: boolean;
  timeZone?: string;
}

export interface IMyProject {
  date: string;
  title: string;
  desc: string;
  imagePreview: any;
  href: string;
  anchor?: boolean;
  techStack: React.ReactNode;
}
