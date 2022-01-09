# CREATE STARTER APP TEMPLATE

**this repo is to generate boilerplate code for all codebases currently supporting :**

- react ( _rfc )
- nodeModule ( controler, route, model  )
- solidity ( class with compiler >=0.5.0 <0.8.0 )

to use this repo steps are :

- clone this repo use `git clone https://github.com/tetrex/all-starter.git`
- run `yarn add`
- use `yarn new` and then choose what you want to generate

**Custom config guides**
this repo uses plop to generate files and uses **hbs** ( handelbars ) for templating, all templates are in **generate** folder,
and folder structure is self explanatory, plop config is in **plopfile.js** in root, to change file types and folder structure check out `generate > index.js` and config accordingly
