## Creating Routes

Next.js uses a file-system based router where **folders** are used to define routes.

Each folder represents a [**route** segment](/docs/app/building-your-application/routing#route-segments) that maps to a **URL** segment. To create a [nested route](/docs/app/building-your-application/routing#nested-routes), you can nest folders inside each other.


A special [`page.js` file](/docs/app/building-your-application/routing/pages-and-layouts#pages) is used to make route segments publicly accessible.


In this example, the `/dashboard/analytics` URL path is _not_ publicly accessible because it does not have a corresponding `page.js` file. This folder could be used to store components, stylesheets, images, or other colocated files.

> **Good to know**: `.js`, `.jsx`, or `.tsx` file extensions can be used for special files.

## Creating UI

[Special file conventions](/docs/app/building-your-application/routing#file-conventions) are used to create UI for each route segment. The most common are [pages](/docs/app/building-your-application/routing/pages-and-layouts#pages) to show UI unique to a route, and [layouts](/docs/app/building-your-application/routing/pages-and-layouts#layouts) to show UI that is shared across multiple routes.

For example, to create your first page, add a `page.js` file inside the `app` directory and export a React component:

```tsx filename="app/page.tsx" switcher
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

```jsx filename="app/page.js" switcher
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```