# Lingita

[![Coverage Status](https://coveralls.io/repos/github/nicecab/lingita/badge.svg?branch=master)](https://coveralls.io/github/nicecab/lingita?branch=master)

### Dependencies

* Ruby (>= 2.3.0)
* Rails (>= 5.0.0 beta4)
* Node (>= 5.5.0)
* Postgres (>= 9.3)

### Running the app

The app is developed using mainly Rails, React, and Redux. It requires ruby, rails, nodejs with npm installed.

```
> bundle
> npm i
> bin/rake db:setup
> foreman start -f Procfile.hot
```

### Ruby

`rbenv` is a fantastic ruby version manager.

### Nodejs

`n` is a fantastic nodejs version manager.

### Python

Python is required to run node-gyp to build native extentions of some nodejs libraries. It requires Python 2.x.
`pyenv` is a good tool to manage python versions

### Postgres

```
> brew install postgres
> initdb /usr/local/var/postgres -E utf8
> pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
> createuser --interactive -P
username: postgres
password: postgres
```
