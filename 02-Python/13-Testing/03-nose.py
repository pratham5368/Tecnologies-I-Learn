"""Nose is another opensource testing framework that extends unittest to provide a more flexible testing framework.

https://nose.readthedocs.io/en/latest/

Installation and quick start
On most UNIX-like systems, you’ll probably need to run these commands as root or using sudo.

Install nose using setuptools/distribute:

easy_install nose
Or pip:

pip install nose
Or, if you don’t have setuptools/distribute installed, use the download link at right to download the source package, and install it in the normal fashion: Ungzip and untar the source package, cd to the new directory, and:

python setup.py install
However, please note that without setuptools/distribute installed, you will not be able to use third-party nose plugins.

This will install the nose libraries, as well as the nosetests script, which you can use to automatically discover and run tests.

Now you can run tests for your project:

cd path/to/project
nosetests
You should see output something like this:

..................................
----------------------------------------------------------------------
Ran 34 tests in 1.440s

OK
Indicating that nose found and ran your tests.

For help with nosetests’ many command-line options, try:

nosetests -h

"""