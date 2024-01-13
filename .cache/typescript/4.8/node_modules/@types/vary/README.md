# Installation
> `npm install --save @types/vary`

# Summary
This package contains type definitions for vary (https://github.com/jshttp/vary#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/vary.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/vary/index.d.ts)
````ts
/// <reference types="node" />
import { ServerResponse } from "http";
export = vary;

declare function vary(res: ServerResponse, field: string | string[]): void;

declare namespace vary {
    function append(header: string, field: string | string[]): string;
}

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 15:11:36 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)

# Credits
These definitions were written by [BendingBender](https://github.com/BendingBender).
