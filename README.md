# Next.js Template

with:
- [Bun](https://bun.sh)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Panda CSS](https://panda-css.com/docs/installation/nextjs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Component Creation (script)

## Getting Started

Clone this repo:

```bash
gh repo clone dmbdesignpdx/next-temp
```

Install dependencies:

```bash
bun install
```

First, run the development server:

```bash
bun start
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other commands

Test and watch for changes:

```bash
bun test --watch
```

Create a new component:

```bash
bun comp <ComponentName> [-e] [element]
```

Production build:

```bash
bun prod
```

Preview the production build:

```bash
bun preview
```
