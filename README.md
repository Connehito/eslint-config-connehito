# eslint-config-connehito

ESLint shareable config for Connehito

## Installation

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

v2 (For TypeScript project):

```sh
$ yarn add --dev \
  eslint \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-prettier \
  eslint-plugin-react \
  prettier \
  typescript \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  @connehito/eslint-config
```

## Usage

Add this to your `.eslintrc` file:

```json
{
  "extends": "@connehito"
}
```

## License

MIT © [Connehito](https://connehito.com)
