import { DateTimeFormatOptions } from './interfaces';

export function cn(...cns: Array<string>) {
  return cns.join(' ');
}

export function time(val: any) {
  let options: DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('id-ID', options).format(new Date(val));
}
