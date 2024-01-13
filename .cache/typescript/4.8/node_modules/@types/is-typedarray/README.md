# Installation
> `npm install --save @types/is-typedarray`

# Summary
This package contains type definitions for is-typedarray (https://github.com/hughsk/is-typedarray).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/is-typedarray.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/is-typedarray/index.d.ts)
````ts
/// <reference types="node" />

export = isTypedArray;

declare function isTypedArray(candidate: any): candidate is isTypedArray.TypedArray;

declare namespace isTypedArray {
    function strict(candidate: any): candidate is TypedArray;
    function loose(candidate: any): candidate is TypedArray;

    type TypedArray =
        | Int8Array
        | Int16Array
        | Int32Array
        | Uint8Array
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Float32Array
        | Float64Array
        | Buffer;
}

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 03:09:37 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)

# Credits
These definitions were written by [BendingBender](https://github.com/BendingBender).
