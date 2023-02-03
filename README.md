# eslint-config-connehito

ESLint shareable config for Connehito

# ⚠️ CAUTION: This repository is archived!

This repository had not been maintained for about two years.
The engineers at Connehito discussed and decided to archive this repository.

Ref: [#108](https://github.com/Connehito/eslint-config-connehito/issues/108)

## How to remove `@connehito/eslint-config`

### 0. Condition

The file with the following contents is located in the current directory.

```javascript
// .eslintrc.js
module.exports = {
  extends: ['@connehito'],
  rules: {
    'import/no-unresolved': 'off',
  },
}
```

### 1. Merge config file

```shell
$ curl "https://raw.githubusercontent.com/Connehito/eslint-config-connehito/main/index.js" >> .eslintrc.js
```

```diff
// .eslintrc.js

       'import/no-unresolved': 'off',
    },
  }
+ module.exports = {
+   root: true,
+   env: {
+     es6: true,
+   ...
+   ],
+ }
```

### 2. Remove `extends: ['@connehito']`

```diff
// .eslintrc.js

  module.exports = {
-   extends: ['@connehito'],
    rules: {
      'import/no-unresolved': 'off',
    },
```

### 3. Merge the config file manually

```diff
// .eslintrc.js

-  module.exports = {
-   rules: {
-     'import/no-unresolved': 'off',
-   },
- }
  module.exports = {
    root: true,
    env: {
 // ...
          singleQuote: true,
        },
      ],
+     'import/no-unresolved': 'off',
    },
    overrides: [
      {
```

### 4. Remove `@connehito/eslint-config`

```shell
$ npm uninstall @connehito/eslint-config
# or
$ yarn remove @connehito/eslint-config
```

```diff
// package.json

  ...
-     "@connehito/eslint-config": "2.2.0",
  ...
```

Ref: [#107](https://github.com/Connehito/eslint-config-connehito/issues/107)

## Installation

v2 (For TypeScript project):

```sh
$ yarn add --dev \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jest \
  eslint-plugin-prettier \
  eslint-plugin-react \
  prettier \
  typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @connehito/eslint-config
```

v1 (For Flowtype project):

```sh
$ yarn add --dev \
  babel-eslint \
  eslint \
  eslint-config-prettier \
  eslint-plugin-flowtype \
  eslint-plugin-import \
  eslint-plugin-prettier \
  eslint-plugin-react \
  prettier \
  @connehito/eslint-config@^1.4.1
```

## Usage

Add this to your `.eslintrc.js` file:

```js
module.exports = {
  extends: ['@connehito']
}
```

## License

MIT © [Connehito](https://connehito.com)
