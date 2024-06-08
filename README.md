# Steps

https://medium.com/@nedopaka/setup-a-react-vite-project-with-swc-prettier-vitest-2024-62ecff357c7b

deps :

```
npm create vite@latest
npm i -D -E prettier  
npm i -D eslint-config-prettier
npm i -D eslint eslint-plugin-react 
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react
npm i -D cypress
npm i -D start-server-and-test
```

eslint.cjs :

```
 extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
        // Make sure it's always the last config, so it gets the chance to override other configs.
        'prettier',
    ],
```

vitest.config.ts

```
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      provider: "istanbul",
      enabled: true,
      reporter: ["text", "html"],
    },
  },
});
```

cypress/tsconfig.json

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

package.json :

```
    "test": "vitest --run",
    "test:watch": "vitest --ui"
```