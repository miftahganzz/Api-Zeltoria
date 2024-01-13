# Installation
> `npm install --save @types/json-stringify-safe`

# Summary
This package contains type definitions for json-stringify-safe (https://github.com/isaacs/json-stringify-safe).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/json-stringify-safe.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/json-stringify-safe/index.d.ts)
````ts
export = stringify;

declare function stringify(
    obj: any,
    serializer?: stringify.EntryProcessor | null,
    indent?: string | number | null,
    decycler?: stringify.EntryProcessor,
): string;

declare namespace stringify {
    function getSerialize(serializer: EntryProcessor | null, decycler?: EntryProcessor): EntryProcessor;

    type EntryProcessor = (key: string, value: any) => any;
}

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 03:09:37 GMT
 * Dependencies: none

# Credits
These definitions were written by [BendingBender](https://github.com/BendingBender).
