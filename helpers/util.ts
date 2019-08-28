const toString = Object.prototype.toString;

export function isDate(val:any):val is Date {
  return toString.call(val) === '[object Date]';
}

export function isObject(val:any) :val is Object {
  // null 也是object类型
  return val !== null && typeof val === 'object';
}
