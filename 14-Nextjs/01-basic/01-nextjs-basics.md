## What is Next.js?
[docs](https://nextjs.org/docs)
[learn](https://masteringnextjs.com/)


Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.

Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.

## Main Features

Some of the main Next.js features include:

| Feature                                                                  | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Routing](/docs/app/building-your-application/routing)                   | A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.                                                    |
| [Rendering](/docs/app/building-your-application/rendering)               | Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes. |
| [Data Fetching](/docs/app/building-your-application/data-fetching)       | Simplified data fetching with async/await in Server Components, and an extended `fetch` API for request memoization, data caching and revalidation.                                              |
| [Styling](/docs/app/building-your-application/styling)                   | Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS                                                                                                   |
| [Optimizations](/docs/app/building-your-application/optimizing)          | Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.                                                                                        |
| [TypeScript](/docs/app/building-your-application/configuring/typescript) | Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.                                                 |

## App Router vs Pages Router

Next.js has two different routers: the App Router and the Pages Router. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

At the top of the sidebar, you'll notice a dropdown menu that allows you to switch between the **App Router** and the **Pages Router** features. Since there are features that are unique to each directory, it's important to keep track of which tab is selected.

The breadcrumbs at the top of the page will also indicate whether you're viewing App Router docs or Pages Router docs.


