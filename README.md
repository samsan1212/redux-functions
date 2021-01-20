# Redux Functions

A set of functions allow you to create action-creators, reducers, action-type **faster** and **type-safer**.

[![npm](https://img.shields.io/npm/v/redux-functions?color=yellow&style=flat-square)](https://www.npmjs.com/package/redux-functions)

## Installation

NPM

```bash
npm i redux-functions
```

Yarn

```bash
yarn add redux-functions
```

CDN

```html
<!-- format https://cdn.jsdelivr.net/npm/redux-functions@{{VERSION}}/umd/main.js -->
<script src="https://cdn.jsdelivr.net/npm/redux-functions@0.0.9/umd/main.js"></script>
```

## How to Use

### `toType`

In a large scale of redux application, there are tons of action types. It is always a nightmare for developers to think of an unique action name.

`toType` allows you to add a prefix for the action name, so it is easier to debug and manage.

For example

```typescript
import { toType } from "redux-functions";

// create an action type generator
const type = toType("TABLE_TENNIS");

// export the actions type for later use
export const PING = type("PING"); // "TABLE_TENNIS::PING"
export const PONG = type("PONG"); // "TABLE_TENNIS::PONG"
```

### `toActionCreator`

To create an action creator is very simple,

```typescript
import { toActionCreator } from "redux-functions";

export const ping = toActionCreator("PING");
// In Typescript, you can also create a type-safe action creator
export const pong = toActionCreator<boolean>("PONG");

// to use it
ping() // { type: "PING" }
pong(true) // { type: "DELAY_PONG", payload: true };
```

Inspired by [redux-toolkit](https://redux-toolkit.js.org/), You can also use the action creator to verify an unknown action.

```typescript
// In Javascript, using "=="
ping == { type: "PING" } // true
ping == { type: "PONG" } // false

// In Typescript
ping.test({ type: "PING" }) // true
ping.test({ type: "PONG" }) // false
```

#### Caveat

There is a caveat about the redux actions generated by `redux-functions`.

All the actions generated by `toActionCreator` will be in the format of

```typescript
import type { Action } from "redux";
interface AppAction<T> extends Action<string>{
    payload: T;
}
```

### `toReducer`

To create a reducer without boilerplate. `toReducer` takes two parameters, **action type** and **default value**, i.e. _`toReducer(action, defaultValue)`_.

For example

```typescript
import { toReducer } from "redux-functions";
import { combineReducers } from "redux";

const ping = toReducer("PING", false);
const pong = toReducer("PONG", false);

const reducers = combineReducers({ ping, pong });
```

#### Caveat

Unlike [redux-toolkit](https://redux-toolkit.js.org/)'s `createReducer`, `toReducer` only handle one single action for each generated reducer.

If you would like to have more customisation on the reducer handling, please check [redux-toolkit](https://redux-toolkit.js.org/).
