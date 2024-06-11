# Init Vite + Vitest + React projects

### Dependencies

```
npm create vite@latest
npm i -D -E prettier  
npm i -D eslint-config-prettier
npm i -D eslint eslint-plugin-react 
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react
npm i -D cypress
npm i -D start-server-and-test
```

### Eslint

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

### Vitest

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

### Cypress

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

### Scripts

package.json :

```
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "format": "prettier --write ./src",
    "test": "vitest --run",
    "test:watch": "vitest --ui",
    "test:component:start": "vite --port 3030",
    "test:component:open": "cypress open",
    "test:component:run": "cypress run",
    "test:component": "start-server-and-test test:component:start http://localhost:3030 test:component:open",
    "test:component:ci": "start-server-and-test test:component:start http://localhost:3030 test:component:run"
  },
```