# seamapi-javascript-tests

This repository contains non-public tests for the [Seam Javascript SDK](https://github.com/seamapi/seamapi-javascript).

## Philosophy

Tests on [Seam Connect](https://github.com/seamapi/seam-connect) handle integration testing, so this repository focuses on testing request and response shapes.

## 🔍 Architecture

We use [Testcontainers](https://www.npmjs.com/package/testcontainers) to run throwaway instances of Seam Connect and Postgres during tests.

We also make use of a few unique features of [Ava](https://github.com/avajs/ava), including:
- [Macros](https://github.com/avajs/ava/blob/main/docs/01-writing-tests.md#reusing-test-logic-through-macros)
- [Shared Workers](https://github.com/avajs/ava/blob/main/docs/recipes/shared-workers.md)

API response types are converted to a JSON schema before testing so we can easily validate the response shape.

One instance of the Seam Connect server is shared between tests that don't modify data, and a new instance of the server is created for each test that modifies data to allow for maximum parallelism.

### High-level overview

```
┌───────────────────────┐ ┌──────────────────┐ ┌─────────────────────┐
│  Test process #1      │ │  Test process #2 │ │   Test process #3   │
│                       │ │                  │ │                     │
│             ┌──────┐  │ │     ┌──────┐     │ │   ┌──────┐          │
│             │ Test │  │ │     │ Test │     │ │   │ Test │          │
│             └───┬──┘  │ │     └──┬───┘     │ │   └───┬──┘          │
│                 │     │ │        │         │ │       │             │
│                 │     │ │        │         │ │       │             │
│            ┌────▼─────┼─┼────────▼─────────┼─┼───────▼───┐         │
│            │ Plugin (f│x│ures/plugins/get-s│r│er-plugin) │         │
│            └──────────┼─┼────────┬─────────┼─┼───────────┘         │
│                       │ │        │         │ │                     │
└───────────────────────┘ └────────┼─────────┘ └─────────────────────┘
                                   │ Ava message protocol
         ┌─────────────────────────┼─────────────────────────────┐
         │                         │                             │
         │   ┌─────────────────────▼───────────────────────┐     │
         │   │ Worker (fixtures/workers/get-server-worker) │     │
         │   └─────────────────────────────────────────────┘     │
         │                                                       │
         │             Worker process #1                         │
         │                                                       │
         └───────────────▲────────────────────────────────────▲──┘
                         │                                    │
                         │                                    │
                         │                                    │
Readable server          │                   Writable server  │
┌────────────────────────┴─┐                 -----------------└──--------
│                          │                 -                          -
│  ┌────────────────────┐  │                 -  ┌────────────────────┐  -
│  │                    │  │                 -  │                    │  -
│  │ Server container   │  │                 -  │ Server container   │  -
│  │                    │  │                 -  │                    │  -
│  └────────────────────┘  │                 -  └────────────────────┘  -
│                          │                 -                          -
│                          │                 -                          -
│                          │                 -                          -
│  ┌────────────────────┐  │                 -  ┌────────────────────┐  -
│  │                    │  │                 -  │                    │  -
│  │ Database container │  │                 -  │ Database container │  -
│  │                    │  │                 -  │                    │  -
│  └────────────────────┘  │                 -  └────────────────────┘  -
│                          │                 -                          -
└──────────────────────────┘                 ----------------------------
```

### Details

When using Ava, each test runs concurrently in its own process. This makes managing shared resources a little complicated; luckily Ava recently added support for "shared workers."

Tests request a server from the shared worker (and specify whether the test will modify data or not). The worker creates a new server instance if necessary, and returns it to the test.
