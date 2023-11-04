## Developer Experience

- Use docker-compose in your application for ease of development.
- Use bind mounts to mount the code from your local into the container filesystem to avoid having to rebuild the container image with every single change.
- For auto-reloading, you can use tools like vite for client side, nodemon for nodejs or air for golang.
- You should also provide a way to debug your applications. For example, look into delve for Go, enable debugging in node.js using —inspect flag etc. It doesn’t matter what you use, but the point is that you should have a way to debug your application running inside the container.
- You should have a way to run tests inside the container. For example, you could have a separate docker-compose file for running tests.
- You should have a CI pipeline for production images.
- Ephemeral environment for each pull request

### Hot Reloading in Docker
Even though we can speed up the image building with layer caching enable, we don’t want to have to rebuild our container image with every code change. Instead, we want the state of our application in the container to reflect changes immediately. We can achieve this through a combination of bind mounts and hot reloading utilities!

### Debuggers in Docker
In order to make developing with containers competitive with developing locally, we need the ability to run and attach to debuggers inside the container.

### Tests
We want to run tests in an environment as similar as possible to production, so it only makes sense to do so inside of our containers!

### Continuous Integration (CI)
Continuous integration is the idea of executing some actions (for example build, test, etc…) automatically as you push code to your version control system.

For containers, there are a number of things we may want to do:

- Build the container images
- Execute tests
- Scan container images for vulnerabilities
- Tag images with useful metadata
- Push to a container registry

