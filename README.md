# iso-path-join
Node.js's native 'path' module's 'join' method made isomorphic(/universal)

useful for using 'require' on the front end or for dynamically generating routes.  Used the exact same way as Node.js's native <a href='https://nodejs.org/api/path.html#path_path_join_path1_path2'>path.join</a> with the bonus of being able to handle arrays

```js
import pathJoin from 'iso-path-join'

var joinedPath = pathJoin('..', '..', './', 'testFolder', ['check', 'me', 'out'])

console.log(joinedPath) // => '../.././testFolder/check/me/out'
```
[![NPM][nodei-image]][nodei-url]

[nodei-image]: https://nodei.co/npm/iso-path-join.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://www.npmjs.com/package/iso-path-join
