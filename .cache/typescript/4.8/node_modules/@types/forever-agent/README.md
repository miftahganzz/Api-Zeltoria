# Installation
> `npm install --save @types/forever-agent`

# Summary
This package contains type definitions for forever-agent (https://github.com/mikeal/forever-agent).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/forever-agent.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/forever-agent/index.d.ts)
````ts
/// <reference types="node" />

import { Agent as HttpAgent, AgentOptions as HttpAgentOptions } from "http";

export = ForeverAgentModule;

interface ForeverAgentOptions extends HttpAgentOptions {
    minSockets?: number | undefined;
}

declare class ForeverAgent extends HttpAgent {
    constructor(options?: ForeverAgentOptions);

    static defaultMinSockets: number;
}

declare class ForeverAgentSSL extends ForeverAgent {
    constructor(options?: ForeverAgentOptions);
}

declare const ForeverAgentModule: typeof ForeverAgent & {
    SSL: typeof ForeverAgentSSL;
};

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 03:09:37 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)

# Credits
These definitions were written by [Dmitry Guketlev](https://github.com/yavanosta).
