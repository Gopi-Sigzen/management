from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in management/__init__.py
from management import __version__ as version

setup(
	name="management",
	version=version,
	description="management",
	author="frappe",
	author_email="frappe@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
