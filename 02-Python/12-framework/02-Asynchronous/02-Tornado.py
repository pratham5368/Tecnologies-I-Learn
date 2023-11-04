"""Tornado isn’t a new framework at all. Its initial release was in 2009 and since then, its focus has been on providing rock-solid asynchronous programming with high concurrency.
https://www.tornadoweb.org/en/stable/

Tornado isn’t a web framework fundamentally. It’s a collection of asynchronous modules, which are also used to build the web framework module. More specifically, these modules are:

Coroutines and other primitives (tornado.gen, tornado.locks, tornado.queues, etc.)
Networking modules (tornado.ioloop, tornado.iostream, etc.)
Asynchronous servers and clients (tornado.httpserver, tornado.httpclient, etc.)
These have been combined to produce the final framework modules: tornado.web, tornado.routing, tornado.template, etc."""

import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()