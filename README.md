# Agathon's [ESLint](https://eslint.org/) configuration

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Default Config](#default-config)
  - [React Config](#react-config)
  - [React Native](#react-native-config)
- [Specifying Environments](#specifying-environments)
- [Editor Integration & Autoformatting](#editor-integration-autoformatting)
  - [VS Code](#vs-code)
  - [Sublime Text](#sublime-text)
- [Enforced Rules](#enforced-rules)
  - [React Specific Rules](#react-specific-rules)
  - [React Native Specific Rules](#react-native-specific-rules)
- [Overriding Rules](#overriding-rules)

## Usage

There are three ESLint configurations available for your usage:

1. [Default](#default-config)
2. [React](#react-config)
3. [React-Native](#react-native-config)

### Default Config

The default includes non specific frontend framework rules. This configuration can be used in vanilla JS, Node, or non front-end framework projects.

**In your `.eslintrc`:**

**1. Install dependencies**

```sh
yarn add --dev @agathongroup/eslint-config eslint babel-eslint prettier eslint-config-prettier
```

**2. In your `.eslintrc`:**

```json
{
  "extends": "@agathongroup"
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### React Config

Includes everything in the default config, plus environment specification and react-specific rules with

- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)

**1. Install dependencies**

```sh
yarn add --dev @agathongroup/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-jsx-a11y
```

**2. In your `.eslintrc`:**

```json
{
  "extends": "@agathongroup/eslint-config/react"
}
```

### React Native Config

Includes everything in the default config, plus environment specification and react-native specific rules with

- [`eslint-plugin-react-native`](https://github.com/intellicode/eslint-plugin-react-native)

**1. Install dependencies**

```sh
yarn add --dev @agathongroup/eslint-config eslint babel-eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-native
```

**2. In your `.eslintrc`:**

```json
{
  "extends": "@agathongroup/eslint-config/react-native"
}
```

## Specifying Environments

The **default** configuration does not specify a certain environment as to not make any assumptions about the project. The only default environment specified is `es2020`. You can see the [default settings here](https://github.com/agathongroup/eslint-config/blob/master/index.js).

You can specify individual project environments in the `.eslintrc` file:

```json
{
  "extends": "@agathongroup",
  "env": {
    "browser": true,
    "node": true
  }
}
```

View all available environments in the [ESLint Docs](https://eslint.org/docs/user-guide/configuring#specifying-environments)

## Editor Integration & Autoformatting

Once you've installed the config, the following are recommended settings for your editor to lint and fix the code for you.

### VS Code

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): `View → Extensions` then search and install ESLint
2. You may need to reload the editor
3. In your VS Code user settings `Code → Preferences → Settings` click the icon with the arrow and paper in the top right corner to modify your `settings.json` file. Add the following to your settings:

   ```json
   // Format on save with Prettier rules
   "editor.formatOnSave": true,
   // Tell the ESLint plugin to run on save
   "editor.codeActionsOnSave": { "source.fixAll.eslint": true }
   // An array of language identifiers specify the files to be validated
   "eslint.validate": ["html", "javascript", "javascriptreact"]
   ```

### Sublime Text

1. Install [Package Control](https://packagecontrol.io/installation)
2. Install [ESLint-Formatter](https://github.com/TheSavior/ESLint-Formatter)
3. And then allow auto fix on save: `Preferences → Package Settings → ESLint Formatter → Settings` then add `"format_on_save": true` to the settings file

## Enforced Rules

Our ESLint config extends `eslint:recommended` which enable rules that relate to possible syntax or logic errors in JavaScript. Rules marked with check marks in the large [list of ESLint rules](https://eslint.org/docs/rules/) are enforced with `eslint:recommended`.

The rules listed below are enabled in addition to `eslint:recommended`.

<details>
<summary>no-console</summary>

[Disallow the use of console](https://eslint.org/docs/rules/no-console#disallow-the-use-of-console-no-console)

Using `console.log` during development is fine, but you shouldn't use `console.log` in production code.

> In JavaScript that is designed to be executed in the browser, it's considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using console should be stripped before being pushed to production.

```js
// bad
console.log('bad');
```

</details>

<details>
<summary>curly</summary>

[Require following curly brace conventions](https://eslint.org/docs/rules/curly#require-following-curly-brace-conventions-curly)

Always wrap the block of code in curly braces when using conditionals.

> JavaScript allows the omission of curly braces when a block contains only one statement. However, it is considered by many to be best practice to never omit curly braces around blocks, even when they are optional, because it can lead to bugs and reduces code clarity.

```js
// bad
if (foo) foo++;

while (bar) baz();

if (foo) {
  baz();
} else qux();

// good
if (foo) {
  foo++;
}

while (bar) {
  baz();
}

if (foo) {
  baz();
} else {
  qux();
}
```

</details>

<details>
<summary>eqeqeq</summary>

[Require === and !==](https://eslint.org/docs/rules/eqeqeq#require-and-eqeqeq)

Use strict equality or inequality operators.

> It is considered good practice to use the type-safe equality operators `===` and `!==` instead of their regular counterparts `==` and `!=.`
> The reason for this is that `==` and `!=` do type coercion which follows the rather obscure [Abstract Equality Comparison Algorithm](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3). For instance, the following statements are all considered true:
>
> - [] == false
> - [] == ![]
> - 3 == 03

```js
// bad
a == b;
foo == true;
bananas != 1;
value == undefined;
typeof foo == 'undefined';
'hello' != 'world';
0 == 0;
true == true;
foo == null;

// good
a === b;
foo === true;
bananas !== 1;
value === undefined;
typeof foo === 'undefined';
'hello' !== 'world';
0 === 0;
true === true;
foo === null;
```

</details>

<details>
<summary>no-eq-null</summary>

[Disallow Null Comparisons](https://eslint.org/docs/rules/no-eq-null#disallow-null-comparisons-no-eq-null)

Use strict equality/inequality when checking `null` values.

> Comparing to `null` without a type-checking operator (`==` or `!=`), can have unintended results as the comparison will evaluate to true when comparing to not just a `null`, but also an `undefined` value.

```js
// bad
if (foo == null) {
  bar();
}

while (qux != null) {
  baz();
}

// good
if (foo === null) {
  bar();
}

while (qux !== null) {
  baz();
}
```

</details>

<details>
<summary>no-use-before-define</summary>

[Disallow Early Use](https://eslint.org/docs/rules/no-use-before-define#disallow-early-use-no-use-before-define)

Define the variable or function before using it.

> In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope, so it's possible to use identifiers before their formal declarations in code. This can be confusing and some believe it is best to always declare variables and functions before using them.
> In ES6, block-level bindings (`let` and `const`) introduce a "temporal dead zone" where a `ReferenceError` will be thrown with any attempt to access the variable before its declaration.

```js
// bad
alert(a);
const a = 10;

f();
function f() {}

function g() {
  return b;
}
const b = 1;

// good
let a;
a = 10;
alert(a);

function f() {}
f(1);

const b = 1;
function g() {
  return b;
}
```

</details>

<details>
<summary>prefer-const</summary>

Use `const` instead of `let` when a constiable is never reassigned.

> If a variable is never reassigned, using the `const` declaration is better.
> `const` declaration tells readers, "this variable is never reassigned," reducing cognitive load and improving maintainability.

```js
// bad

// it's initialized and never reassigned.
let a = 3;
console.log(a);

let a;
a = 0;
console.log(a);

// `i` is redefined (not reassigned) on each loop step.
for (let i in [1, 2, 3]) {
  console.log(i);
}

// `a` is redefined (not reassigned) on each loop step.
for (let a of [1, 2, 3]) {
  console.log(a);
}

// good

// using const.
const a = 0;

// it's never initialized.
let a;
console.log(a);

// it's reassigned after initialized.
let a;
a = 0;
a = 1;
console.log(a);

// it's initialized in a different block from the declaration.
let a;
if (true) {
  a = 0;
}
console.log(a);

// it's initialized at a place that we cannot write a variable declaration.
let a;
if (true) {
  a = 0;
}
console.log(a);

// `i` gets a new binding each iteration
for (const i in [1, 2, 3]) {
  console.log(i);
}

// `a` gets a new binding each iteration
for (const a of [1, 2, 3]) {
  console.log(a);
}
```

</details>

<details>
<summary>prefer-template</summary>

[Suggest using template literals instead of string concatenation](https://eslint.org/docs/rules/prefer-template#suggest-using-template-literals-instead-of-string-concatenation-prefer-template)

> Use template literals instead of string concatenation.

```js
// bad
const str = 'Hello,' + name + '!';
const str = 'Time: ' + 12 * 60 * 60 * 1000;

// good
const str = 'Hello World!';
const str = `Hello, ${name}!`;
const str = `Time: ${12 * 60 * 60 * 1000}`;
```

</details>

### React Specific Rules

Our ESLint config extends `plugin:react/recommended` which enable rules that relate to common React and JSX errors. You can view all available react rules in the [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules) repo. The following rule is enforced in addition to the recommended configuration.

<details>
<summary>react/no-unescaped-entities</summary>

[No unescaped entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)

This rule prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.

```jsx
// bad
<MyComponent
  name="name"
  type="string"
  foo="bar">  {/* oops! */}
  x="y">
  Body Text
</MyComponent>

// good
<MyComponent>{'Text'}}</MyComponent>
```

</details>

<details>
<summary>react/react-in-jsx</summary>

[DISABLE missing React variable when using JSX](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)

This is rule is turned "off" because we use `React` as a global variable.
</details>

<details>
<summary>react/prop-types</summary>

[DISABLE prop types validation](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

This is rule is turned "off" because prop types are not generally used in our projects.
</details>


### React Native Specific Rules

You can view all available react native rules in the [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native#list-of-supported-rules) repo. The following rules are enforced:

<details>
<summary>react-native/no-raw-text</summary>

[Detect raw text outside of Text component](https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md)

All strings in React Native should be wrapped with a Text component.

```jsx
// bad
<View>some text</View>

const text = 'some text';
<View>{`${text}`}</View>

// good
<View><Text>some text</Text></View>
const text = 'some text';
<View><Text>{`${text}`}</Text></View>
```

</details>

<details>
<summary>react-native/no-single-element-style-arrays</summary>

[No Single Element Style Arrays are allowed](https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-single-element-style-arrays.md)

These cause unnecessary re-renders as each time the array's identity changes.

```jsx
// bad
<View style={[{height: 10}]} />

// good
<View style={{ height: 10 }} />
```

</details>

## Overriding Rules

If you'd like to override any rules, you can add the rules to your `.eslintrc` file.

```json
{
  "rules": {
    "rule-name-here": "off"
  }
}
```
