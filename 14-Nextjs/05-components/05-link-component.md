## Link Component
When linking between pages on websites, you use the ```<a>``` HTML tag.

In Next.js, you can use the Link Component next/link to link between pages in your application. ```<Link>``` allows you to do client-side navigation and accepts props that give you better control over the navigation behavior.

Using ```<Link>```
First, open pages/index.js, and import the Link component from next/link by adding this line at the top:

import Link from 'next/link';
Then find the h1 tag that looks like this:

```
<h1 className={styles.title}>
  Welcome to <a href="https://nextjs.org">Next.js!</a>
</h1> 
```
And change it to:

```<h1 className={styles.title}>
  Read <Link href="/posts/first-post">this page!</Link>
</h1>
```
Next, open pages/posts/first-post.js and replace its content with the following:

import Link from 'next/link';

```export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
```