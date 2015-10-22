# Jotter

Take notes in the terminal. I use this specifically for making word association lists of what I'm thinking. Like twitter, but raw, personal, and in brief bursts.

```
npm i jotter -g
```

## Usage

```
$ mkdir my-jotter
$ jotter
> Hello world
```

This creates a new file with the date as the name `YYYY-MM-DD-jotter.csv`, and stores the text and unix timestamp in the file. If the file doesn't exist it's created, if it does it's appended to.

## Influence

Successor to [reggi/Significance](https://github.com/reggi/Significance), just without the mongo.
