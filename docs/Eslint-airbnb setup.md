# Eslint - airbnb config setup

## Add linting for react with airbnb config

1. Setup eslint
`npm init @eslint/config`
[npm Link](https://www.npmjs.com/package/eslint)
2. Setup airbnb eslint config
i. `npx install-peerdeps --dev eslint-config-airbnb`
ii. Add `"extends": ["airbnb", "airbnb/hooks"]` to your `.eslintrc`
[npm Link](https://www.npmjs.com/package/eslint-config-airbnb)
3. Setup airbnb eslint config for typescript
i. `yarn add -D eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin@^5.13.0 @typescript-eslint/parser@^5.0.0`
ii. Update `.eslintrc` with `"extends": ["airbnb", "airbnb/hooks","airbnb-typescript"]`
iii. Add parser option: `"parserOptions": {
    "project": "./tsconfig.json"
  }`
[npm Link](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
4. To run linting: `npx eslint . --ext .js,.jsx,.ts,.tsx`

> Note: If eslint extension in vs code throws **tsconfig.json not found error**, then change the `eslint.workingDirectories` setting (File -> Preferences -> Settings -> search "eslint.workingDirectories" and edit with relative path of the tsconfig file with root of workspace)

---

## Add linting for emotion.js

1. Add es-linting for emotion.js.
i. `yarn add -D @emotion/eslint-plugin`
ii. Add @emotion plugin in .eslintrc: `"plugins": ["@emotion"]`

```js
// Can add following rules:

  "rules": {
    "@emotion/pkg-renaming": "error",
    "@emotion/jsx-import": "error",
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error"
  }

> Note: Using `eslint-html-reporter` package for linting errors report.

```

---

## Add prettier

1. Install prettier:
`yarn add --dev --exact prettier`
2. Add .prettierrc.json and add prettier rules in it:
`echo {}> .prettierrc.json`
3. Add prettier commands in `package.json`:
Add `npx` if these don't work.
*For checking errors:*
`"format": "prettier --ignore-path .gitignore --check \"**/*.{js,jsx,ts,tsx,css,scss}\"",`
*For fixing errors:*
`"format:write": "prettier --ignore-path .gitignore --write \"**/*.{js,jsx,ts,tsx,css,scss}\""`
4. To avoid conflicts between prettier and eslint, install `eslint-config-prettier`:
  i. Run command: `yarn add --dev eslint-config-prettier`
  ii. Add `eslint-config-prettier` in `.eslintrc.json` => `extends` array.

> `eslint-plugin-prettier` is used to enforce prettier formatting issues as linting errors. This plugin is not recommended.

1. Install `eslint-plugin-prettier`:
`yarn add --dev eslint-plugin-prettier`
2. Add `eslint-plugin-prettier` in `.eslintrc.json` => `plugins` array.

```js
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

More Info: [Link](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)

  ---

## Add husky

1. Install husky:
`yarn add --dev husky`

2. Enable Git hooks:
`npx husky install`

3. Add prepare command in `package.json`:
`npm pkg set scripts.prepare="cd .. && husky install client/.husky"`

4. Run `yarn`. FYI – a .husky folder will appear in the same path as your package.json, in my case under ./client.

5. Create a pre-commit hook.
`npx husky add .husky/pre-commit "cd client"`
Edit `pre-commit` hook:
`cd client`
`yarn lint && yarn format`

6. Run: `git add .husky/pre-commit`

7. Try to make a commit. If provided commands fail, your commit will be automatically aborted.

8. Add a pre-push hook:
`npx husky add .husky/pre-push "cd client"`
Edit `pre-push` hook:
`cd client`
`yarn test -- --watchAll=false`

9. Run: `git add .husky/pre-push`

10. Try to push a commit. If provided commands fail, your push will be automatically aborted.

References:

1. For husky: <https://scottsauber.com/2021/06/01/using-husky-git-hooks-and-lint-staged-with-nested-folders/>

---

## Add lint-staged

1. Install lint-staged:
`yarn add --dev lint-staged`

2. Add `.lintstagedrc.json` in root folder add following in it.
`{
  "*.{ts,tsx}": [
    "eslint"
  ],
  "*.{ts,tsx,js,jsx}": [
    "prettier --write"
  ]
}`

3. Update `client\.husky\pre-commit`:
`yarn lint && yarn format` to `npx lint-staged`.
