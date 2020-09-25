# merced-reactor

This is a command-line tool for generating frontend projects of several types...

# how it works

run command to generate project folder

```
npx merced-spinup  <template> <projectName>
```

for example

```
npx merced-spinup react myproject
```

After spining up a project, cd into the folder and run npm install, then remove the existing git repository or origin remote.

## AVAILABLE TEMPLATES

### Frontend

- react
- angular
- vue
- svelte
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
- basichtml (basic html/css/js setup)
- reactts
- kofu
- vuehtml (vue with a script tag)
- reacthtml (react with a script tag)
- angularjs (AngularJS 1.8, LTS Support Ends 12/31/21)
- jqueryhtml (jquery with a script tag)
- reactrollup

### Backend

- fastify
- koa
- polka
- apollo
- expressreact
- expressejs
- expressrest
- merver
- expresssocket
- mongoexpressreact

### Other

- ts
- plainwebpack
- plainrollup
- commander
- nextts (Next Static Site Generator with Typescript)
