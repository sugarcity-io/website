type Falsy = null | undefined | false;

function isTruthy<T>(val: T | Falsy): val is T {
  return !!val;
}

export function classnames(...vals: (string | Falsy)[]): string {
  return vals.filter(isTruthy).join(" ");
}
