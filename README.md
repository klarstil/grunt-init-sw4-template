# grunt-init-sw4-template

> Create a Shopware 4.x frontend template with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:klarstil/grunt-init-sw4-template.git ~/.grunt-init/sw4-template
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path. For proper bower support, please install [mysysgit](http://msysgit.github.io/) using the option "Run Git from the Windows Command Prompt".)_


## Features
* Check your Javascript using JSHint
* Concatenate and uglify your Javascript
* QUnit Support to test your custom jQuery components.
* LESS Support for the popular css preprocessor
* Use Twitter's bower to manage the dependencies of your template

## Usage

At the command-line, cd into your Shopware ```templates``` directory, run this command and follow the prompts.

```
grunt-init sw4-template
```

Now cd into your newly created template directory and install grunt's dependencies:

```
cd emotion_my_template
npm install
```

## Less support
Using the popular css preprocessor Less is as easy as writing pure css. Just place your Less files in the directory ```frontend/_resources/styles/less``` and just run the following command:

```
grunt less:development
```

## QUnit support
Unit tests and code qualitiy is important - so we're building support for QUnit and JSHint right into the ```Gruntfile.js```. Just place your QUnit test(s) under ```frontend/_resources/javascript/test```.

JSHint will run every time you call the grunt task ```grunt test``` and will check all files, which are located under the following directories:

```
frontend/_resources/javascript/src
frontend/_resources/javascript/test
```


## Bower support
Bower is built right into the grunt file, so you can install bower components using grunt.

### Installing bower package

In your template directory (where the ```Gruntfile.js``` is located), type the following command:

```
grunt bower-install:[pkg-name]
```

If you want to install jQuery as an example, you type the following command:

```
grunt bower-install:jquery
```

---
Now you're done installing packages, just trigger the grunt task ```grunt bower``` to move the components to the corresponding directorys in the template directory.

Please keep in mind that the ```grunt bower-install``` task modifies the ```dependencies``` object in your template's ```bower.json```.


### Uninstalling bower package
The uninstall process is as easy as installing a bower component into your template. As an example, we want to remove jQuery from our template, we just type the following command:

```
grunt bower-uninstall:jquery
```

Now run the grunt task ```grunt bower``` to clean up your ```_resources``` directory and remove the associated component file(s).


## Available tasks
* ```grunt```
	* Runs JSHint, QUnit, compiles Less in production mode (minifing using yuicompress),
	concatenates and uglifies your Javascript
* ```grunt test```
	* Runs JSHint and QUnit
* ```grunt build```
	* Runs bower to install the dependenies, JSHint, QUnit, compiles Less in production mode (minifing using yuicompress), concatenates and uglifies your Javascript
* ```grunt install-bower:[pkg-name]```
	* Installs the specific bower package
* ```grunt uninstall-bower:[pkg-name]```
	* Uninstalls the specific bower package
* ```grunt bower```
	* Moves the components to the corresponding directorys in the template directory and clears up bower's component directory in the root of your template.

---
Please keep in mind that you can list all available tasks using the command ```grunt --help```.

## License
Copyright (c) 2013 "klarstil" Stephan Pohl.
Licensed under the MIT license.