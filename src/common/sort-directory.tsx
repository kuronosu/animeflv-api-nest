export default function sortDirectory(a: any, b: any): number {
  if (typeof a === 'string') return a.localeCompare(b);
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  if (typeof a === 'object' && typeof b === 'object') {
    if (a.hasOwnProperty('name') && b.hasOwnProperty('name'))
      return a.name.localeCompare(b.name);
    if (a.hasOwnProperty('number') && b.hasOwnProperty('number'))
      return a.number - b.number;
  }
  return 0;
}
