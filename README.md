## Nextjs-Tailwind-Store

This is a simple e-commerce store built with Next.js and Tailwind CSS. It uses
[Nordic Store](https://www.tailwindtoolbox.com/templates/nordic-store) is an open source, nordic inspired e-commerce product listing template for [Tailwind CSS](https://tailwindcss.com/) created by [Tailwind Toolbox](https://www.tailwindtoolbox.com/). Nextjs project was created with my own boilerplate that includes:
[Eslint](https://eslint.org/)
, [Prettier](https://prettier.io/)
, [Husky](https://github.com/typicode/husky)
, [Jest](https://jestjs.io/)
, [Tailwindcss](https://tailwindcss.com/)
, [PlopJS](https://plopjs.com/)
dowloaded with the command:

```sh
yarn create next-app -e https://github.com/caiobarilli/nextjs-boilerplate/tree/main/app_router/jest-tailwind nextjs-tailwind-store
```

### How to use

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Features

Generate component with plop

```bash
npm run generate MyComponent
```

Linting with eslint

```bash
npm run lint
```

Testing with jest

```bash
npm run test
```

```bash
npm run test:watch
```

### Husky

This project uses Husky to prevent bad commits. It runs lint-staged before each commit.

```bash
npm run prepare
```