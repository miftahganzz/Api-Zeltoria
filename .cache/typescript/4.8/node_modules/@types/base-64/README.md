# Installation
> `npm install --save @types/base-64`

# Summary
This package contains type definitions for base-64 (https://github.com/mathiasbynens/base64).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base-64.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/base-64/index.d.ts)
````ts
export as namespace base64;

export const version: string;

/**
 * This function takes a byte string (the input parameter) and encodes it according to base64.
 * The input data must be in the form of a string containing only characters
 * in the range from U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF.
 * The base64.encode() function is designed to be fully compatible
 * with btoa() as described in the HTML Standard.
 * see: https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-btoa
 */
export function encode(input: string): string;
/**
 * This function takes a base64-encoded string (the input parameter) and decodes it.
 * The return value is in the form of a string containing only characters in
 * the range from U+0000 to U+00FF, each representing a binary byte with values 0x00 to 0xFF.
 * The base64.decode() function is designed to be fully compatible
 * with atob() as described in the HTML Standard.
 * see: https://html.spec.whatwg.org/multipage/webappapis.html#dom-windowbase64-atob
 */
export function decode(input: string): string;

````

### Additional Details
 * Last updated: Mon, 06 Nov 2023 22:41:04 GMT
 * Dependencies: none

# Credits
These definitions were written by [Dolan Miu](https://github.com/dolanmiu).
