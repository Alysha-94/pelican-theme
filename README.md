# Pelican Theme
A [custom](http://docs.getpelican.com/en/3.6.3/themes.html) theme I made for [Pelican](https://github.com/getpelican/pelican) static site generator using the [Jinja](http://jinja.pocoo.org/) templating engine, CSS and JavaScript.

## To try this theme
Have the file structure like so:
```
└── yourproject
    ├── Makefile
    ├── content
    │   └── (pages)
    ├── custom
    │   ├── static
    │   │   ├── css
    │   │   │   ├── pygment.css
    │   │   │   └── style.css
    │   │   └── js
    │   │       └── navbar.js
    │   └── templates
    │       ├── archives.html
    │       ├── article.html
    │       ├── base.html
    │       ├── index.html
    │       ├── page.html
    │       └── post-info.html
    ├── output
    │   └── (output files)
    ├── pelicanconf.py
    ├── publishconf.py.txt
    └── tasks.py
```
Edit your Pelican settings file (`pelicanconf.py`) to include this line:
```
THEME = 'custom'
```
Save the changes to your settings file and then regenerate your site by using the Makefile you should already have set up using pelican-quickstart:
```
make html
```