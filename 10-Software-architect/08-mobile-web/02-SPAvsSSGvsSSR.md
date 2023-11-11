### SPA vs SSG vs SSR
- SPA: A single page application loads only a single web document from the server and then updates the content of that document on demand via Javascript APIs without reloading the entire document. React, Vue, Angular are the top frameworks used to create single page applications.
![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*36IFEjGt4C6DsnFY-uW-yw.png)

- SSR: This technique uses a server like Node.js to fully render the web document upon the receival of a request and then send it back to the client. This way the user get an interactive document with all the necessary information without having to wait for any JavaScript or CSS files to load.
![](https://miro.medium.com/v2/resize:fit:828/format:webp/1*cfxPb1S-oXM49yIS8HLHuQ.png)
- SSG: Static site generation renders the web document in the server(like SSR), however the page is rendered at build time. So, instead of rendering the page on the server upon the receival of a request, the page is already rendered in the server, waiting to be served to the client.

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JnrcYDCjuFw2hIx_iPY06g.png)


### Server-side rendering (SSR and SSG) vs Client-side rendering (SPA)

- SSR allows better SEO (Search Engine Optimization) because the content doesn't have to be loaded by Javascript like in CSR, so the search engine's web crawlers can directly parse the information.
- SSR is better for slow connections because the HTML is immediately provided, whereas in CSR the user sees a blank page until the Javascript is loaded and renders the page's content.
- SSR allows seeing content with Javascript disabled. I know it sounds bizarre, however, users can have it disabled, intentionally or not. See this link where some of these situations are exposed.
- SSR first load is usually faster because it doesn't need to fetch the whole website in a Javascript bundle as CSR does (some performance optimizations can be made in CSR to reduce this payload, like dynamic imports).
- CSR is faster after the first load since there are no server requests to change pages, which makes it insanely fast.
- CSR provides a better UX (user experience) because it gives a native-app feel to the page. 
