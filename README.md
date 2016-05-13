<!--
@Author: Richard Brammer <richardbrammer>
@Date:   2015-06-16T01:29:41+02:00
@Email:  richard.brammer@geildanke.com
@Last modified by:   richardbrammer
@Last modified time: 2016-04-23T15:01:00+02:00
-->

# GEILDANKE
Jekyll version of https://geildanke.com

[![Code Climate](https://codeclimate.com/github/geildanke/GEILDANKE/badges/gpa.svg)](https://codeclimate.com/github/geildanke/GEILDANKE)

## Installation

1. Set the correct project path in `_data/compass.yml`
2. `$ bundle install`

## Development

`$ jekyll serve --watch`

## Build

`$ jekyll build`

## Deployment

Continuous deployment is provided executed using codeship.io

### gitflow Branch targets:

master      https://geildanke.com           (planned)
develop     https://develop.geildanke.com
release/*   https://release.geildanke.com   (planned)
hotfix/*    https://release.geildanke.com   (planned)

### Impediment / Todo

.htaccess in this repository is not copied to root directory
