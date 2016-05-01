'use strict';

const dupeSlash = /(\/+)/g;

// works just like Node.js's native path library's 'join' function with the bonus of handling arrays
export default function pathJoin(...args) {
  return args.map(val => {
    return val = typeof val === 'string' ? val : // if string just keep as is
      Array.isArray(val) ? pathJoin(...val) : // handle array with recursion
      console.error("tried to join something other than a string or array, it was ignored in pathJoin's result"),
      val && val || ''; // add back slash at the beginning
  }).join('/').replace(dupeSlash, '/'); // join the resulting array together
}
