"""The standard package manager for Python is pip. It allows you to install and manage packages that aren’t part of the Python standard library.

https://pip.pypa.io/en/stable/installation/"""

#Using a Package
#Once the package is installed, it is ready to use.
#Import the "camelcase" package into your project.

import camelcase

c = camelcase.CamelCase()

txt = "hello world"

print(c.hump(txt))

