import { createHash, BinaryToTextEncoding } from 'crypto';

/*
  Code taken from https://github.com/jonschlinkert/is-plain-object
*/

export function isObject(o: any) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

export function isPlainObject(o: any) {
  if (isObject(o) === false) return false;
  // If has modified constructor
  const ctor = o.constructor;
  if (ctor === undefined) return true;
  // If has modified prototype
  const prot = ctor.prototype;
  if (isObject(prot) === false) return false;
  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }
  // Most likely a plain Object
  return true;
}

/*
  Base code taken from https://github.com/IndigoUnited/js-deep-sort-object
  the defaultSortFn function was modified
*/
export function defaultSortFn(a: any, b: any) {
  return typeof a === 'string' ? a.localeCompare(b) : 0;
}

export function deepSort(data: any, sortFn = defaultSortFn) {
  function _deepSort(src: any) {
    let out: any;
    if (Array.isArray(src)) {
      return src.sort(sortFn).map((item) => _deepSort(item));
    }

    if (isPlainObject(src)) {
      out = {};
      Object.keys(src)
        .sort(sortFn)
        .forEach(function (key) {
          out[key] = _deepSort(src[key]);
        });
      return out;
    }
    return src;
  }
  data = JSON.parse(JSON.stringify(data));
  return _deepSort(data);
}

/*
My code
*/

type config = {
  json: any;
  sortFun?: typeof defaultSortFn;
  algorithm?: string;
  encoding?: BinaryToTextEncoding;
};

export default function normalizedJsonHash({
  json,
  sortFun,
  algorithm = 'sha256',
  encoding = 'base64',
}: config) {
  return createHash(algorithm)
    .update(JSON.stringify(deepSort(json, sortFun)))
    .digest(encoding);
}
