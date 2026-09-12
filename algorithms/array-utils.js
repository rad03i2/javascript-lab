export function unique(items) {
  return [...new Set(items)];
}

export function groupBy(items, selector) {
  return items.reduce((groups, item) => {
    const key = selector(item);
    groups[key] ??= [];
    groups[key].push(item);
    return groups;
  }, {});
}

export function chunk(items, size) {
  const result = [];
  for (let index = 0; index < items.length; index += size) {
    result.push(items.slice(index, index + size));
  }
  return result;
}

export function sortBy(items, selector) {
  return [...items].sort((a, b) => String(selector(a)).localeCompare(String(selector(b))));
}
