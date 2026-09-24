export function unique(items) { return [...new Set(items)]; }
export function groupBy(items, selector) {
  if (!Array.isArray(items) || typeof selector !== 'function') throw new TypeError('items must be an array and selector a function');
  return items.reduce((groups, item) => { const key = String(selector(item)); (groups[key] ??= []).push(item); return groups; }, {});
}
export function chunk(items, size) {
  if (!Array.isArray(items)) throw new TypeError('items must be an array');
  if (!Number.isInteger(size) || size <= 0) throw new RangeError('size must be a positive integer');
  const result = []; for (let i = 0; i < items.length; i += size) result.push(items.slice(i, i + size)); return result;
}
export function sortBy(items, selector) {
  if (!Array.isArray(items) || typeof selector !== 'function') throw new TypeError('items must be an array and selector a function');
  return [...items].sort((a,b) => { const x=selector(a), y=selector(b); if (typeof x==='number' && typeof y==='number') return x-y; return String(x).localeCompare(String(y)); });
}
export function sumBy(items, selector = value => value) { return items.reduce((sum,item) => sum + Number(selector(item)), 0); }
export function partition(items, predicate) { const yes=[], no=[]; for (const item of items) (predicate(item)?yes:no).push(item); return [yes,no]; }
