# Pelican Theme
A [custom](http://docs.getpelican.com/en/3.6.3/themes.html) theme I made for [Pelican](https://github.com/getpelican/pelican) static site generator using the [Jinja](http://jinja.pocoo.org/) templating engine, CSS and JavaScript.

## To try this theme
Clone this repository into the main folder of your pelican site, the structure should look something like this:
```
└── yourproject
    ├── Makefile
    ├── content
    │   └── (pages)
    ├── pelican-theme
    │   ├── static
    │   │   ├── css
    │   │   │   └── (css files)
    │   │   └── js
    │   │       └── (js files)
    │   └── templates
    │       └── (custom templates)
    ├── output
    │   └── (output files)
    ├── pelicanconf.py
    ├── publishconf.py.txt
    └── tasks.py
```
Edit your Pelican settings file (`pelicanconf.py`) to look for the theme:
```
THEME = 'pelican-theme'
```
Save the changes to your settings file and then regenerate your site:
```
make html
```