# Eslint - airbnb config setup

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

Note: if eslint extension in vs code throws tsconfig.json not found, then change the `eslint.workingDirectories` setting (File -> Preferences -> Settings -> search "eslint.workingDirectories" and edit with relative path of the tsconfig file with root of workspace)
