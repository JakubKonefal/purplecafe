<h1 align="center">
  Gatsby Typescript Starter
</h1>
<p align="center">Gatsby, Typescript, Styled Components, i18n, Wordpress</p>
</br>

<h2 align="center">
🚨 Read before starting development 🚨
</h2>
<p>There are some minor issues with SSR (Server-Side Rendering). SSR doesn't function well with internationalization (i18n), making it more challenging to handle multi-language pages. Additionally, pairing Gatsby 5 CMS with SSR is not the best approach, as fetching data through GraphQL often results in website timeouts. To utilize a CMS, it's imperative to retrieve data from the server using either <i>axios</i> or <i>urql</i> through the <i>getServerData</i> function..</p>

## 🚀 Quick start

1. **Install packages.**

   ```shell
   yarn
   ```

2. **Start developing.**

   Navigate into your new site’s directory and start it up.

   ```shell
   yarn develop
   ```

   or

   ```shell
   yarn dev
   ```

   or (for external devices tests)

   ```shell
   yarn host
   ```

3. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link:_ `http://localhost:8000/___graphql`.

   _This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package.json
    ├── yarn-lock.json
    └── README.md

1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

10. **`yarn-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`README.md`**: A text file containing useful reference information about your project.

## ⚙️ Src file structure

A quick look at the src-level files and directories you'll see in a Gatsby project. The structure can be modified to fit the project's needs, however, the following structure is recommended. Remember to update prettier configuration if the structure is modified.

    src
    ├── assets
    ├── components
    |   ├── atoms
    |   ├── modules
    |   └── organisms
    ├── hooks
    ├── pages
    ├── styles
    ├── translation
    ├── constants
    ├── schemas
    ├── lib
    ├── graphql
    ├── types
    ├── utils
    ├── layouts
    └── views

## 🛠 UI Components structure

The design system used in the application is called Atomic Design.

### Atoms

Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are HTML tags, such as a form label, an input or a button.

### Molecules

Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These structures do not contain any data fetching or external side effects.

### Organisms

Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface. Organisms can communicate with external services (data fetching, side effects).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
