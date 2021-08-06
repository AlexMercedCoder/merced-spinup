# merced-spinup

This is a command-line tool for generating node projects of several types...
Uses npx degit under the hood so it clones the repo but does not leave behind a git repo.

# how it works

run command to generate project folder

```
npx merced-spinup  <template> <projectName>
```

for example

```
npx merced-spinup react myproject
```

default template if not specified: mercedui

default folder name if not specified: myproject

After spining up a project, cd into the folder and run npm install, then remove the existing git repository or origin remote.

## AVAILABLE TEMPLATES

### Frontend

- react
- angular
- vue
- svelte
- ezcomponent
- amponent
- mercedui
- renderblocks
- mblocks
- basicelement
- componentzoo
- superfunc
- funcomponent
- basicreact
- reactwebp
- reactrouter
- reactredux
- reactreducer
- jquerywebpack
- jqueryts
- basichtml (basic html/css/js setup)
- reactts
- kofu
- vuehtml (vue with a script tag)
- reacthtml (react with a script tag)
- angularjs (AngularJS 1.8, LTS Support Ends 12/31/21)
- jqueryhtml (jquery with a script tag)
- reactrollup
- gruntreact
- reactsassbootstrap
- reactsassmaterialui
- reactsasscontext
- reactstyled
- reactjss
- reactloaded
- reactparcel
- snowreactloaded
- snowreacttask
- mreact

### Snowpack Bundler Templates (From Snowpacks Official Templates)

- snowpack
- snowreact
- snowreactts
- snowsvelte
- snowvue
- snowts
- snowlit (lit-html)
- snowlitts (lit-html with typescript)

### Backend

- fastify
- koa
- polka
- apollo
- mercedexpress (Ruby on Rails like Express Experience)
- expressreact
- expressejs
- expresshandlebars
- expressmustache
- expressmarko
- expresspug
- expressrest
- merver
- expresssocket
- mongoexpressreact
- expressmongo
- expresspg
- express
- expressreactmono (express/react monorepo)
- expressejsmongo
- expressejsmongosupreme
- netlifyfunc
- vercelfunc
- swaggerexpress

### Non-Node Templates

- flask (python framework, requires python 3.7+)
- fastapi (python framework, requires python 3.7+)
- deno (requires deno 1.9+)

### Markdown Blog Templates

- gatsbymarkdown (react)
- nextmarkdown (react)
- sappermarkdown (svelte)
- scullymarkdown (angular)
- gridsomemarkdown (Vue)
- nuxtmarkdown (Vue)
- gatsbyportfolio (Gatsby template for a developer portfolio)

### Other

- ts
- plainwebpack
- plainrollup
- commander
- nextts (Next Static Site Generator with Typescript)
- gulp
- grunt
