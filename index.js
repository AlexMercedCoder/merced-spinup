#!/usr/bin/env node

const { exec, spawnSync } = require("child_process");

const [, , template = "mercedui", name = "myproject"] = process.argv;

//Templates
const templates = {
  amponent: "https://github.com/AlexMercedCoder/amponent-parcel-template.git",
  basicelement: "https://github.com/AlexMercedCoder/BasicElementTemplate.git",
  funcomponent: "https://github.com/AlexMercedCoder/funComponent-template.git",
  reactparcel:
    "https://github.com/AlexMercedCoder/Alex-Merced-React-Parcel-Template.git",
  renderblocks: "https://github.com/AlexMercedCoder/renderblocks-template.git",
  mercedui: "https://github.com/AlexMercedCoder/mercedui-template-webpack.git",
  vue: "https://github.com/AlexMercedCoder/vue-router-buefy-template.git",
  superfunc: "https://github.com/AlexMercedCoder/superfunc-template.git",
  mblocks: "https://github.com/AlexMercedCoder/mBlocks-template.git",
  componentzoo: "https://github.com/AlexMercedCoder/componentzoo-template.git",
  angular: "https://github.com/AlexMercedCoder/angular-template.git",
  svelte: "https://github.com/AlexMercedCoder/svelte-template.git",
  expressreact:
    "https://github.com/AlexMercedCoder/express-react-views-MVC-template.git",
  expressejs: "https://github.com/AlexMercedCoder/express-ejs-template.git",
  expressrest: "https://github.com/AlexMercedCoder/express-rest-template.git",
  merver: "https://github.com/AlexMercedCoder/Merver-Template.git",
  reactwebp: "https://github.com/AlexMercedCoder/ReactWebpackTemplate.git",
  reactrouter: "https://github.com/AlexMercedCoder/ReactRouterTemplate.git",
  koa: "https://github.com/AlexMercedCoder/KoaTemplate.git",
  polka: "https://github.com/AlexMercedCoder/polkatemplate.git",
  apollo: "https://github.com/AlexMercedCoder/ApolloServerTemplate.git",
  reactredux: "https://github.com/AlexMercedCoder/reactreduxtemplate.git",
  reactreducer: "https://github.com/AlexMercedCoder/reactreducertemplate.git",
  jquerywebpack: "https://github.com/AlexMercedCoder/jqeurywebpacktemplate.git",
  basichtml: "https://github.com/AlexMercedCoder/basichtmlcssjstemplate.git",
  ts: "https://github.com/AlexMercedCoder/BasicTypescriptTemplate.git",
  reactts:
    "https://github.com/AlexMercedCoder/ReactWebpackTypescriptTemplate.git",
  fastify: "https://github.com/AlexMercedCoder/FastifyTemplate.git",
  kofu:
    "https://github.com/arthurbernierjr/kofuscript-starter-kit-template.git",
  expresssocket:
    "https://github.com/AlexMercedCoder/express_socketio_template.git",
  plainwebpack: "https://github.com/AlexMercedCoder/plainwebpacktemplate.git",
  plainrollup: "https://github.com/AlexMercedCoder/plainrolluptemplate.git",
  commander: "https://github.com/AlexMercedCoder/commanderclitooltemplate.git",
  basicreact: "https://github.com/AlexMercedCoder/react_webpack_basic.git",
  reacthtml: "https://github.com/AlexMercedCoder/reacthtml.git",
  vuehtml: "https://github.com/AlexMercedCoder/vuehtml.git",
  angularjs: "https://github.com/AlexMercedCoder/basicangularjstemplate.git",
  jqueryhtml: "https://github.com/AlexMercedCoder/jquerybasictemplate.git",
  mongoexpressreact:
    "https://github.com/AlexMercedCoder/express-mongo-reactviews-template.git",
  reactrollup: "https://github.com/AlexMercedCoder/ReactRollupTemplate.git",
  nexts: "https://github.com/AlexMercedCoder/NextTSTemplate.git",
  gulp: "https://github.com/AlexMercedCoder/gulptemplate.git",
  grunt: "https://github.com/AlexMercedCoder/GruntTemplate.git",
  gruntreact: "https://github.com/AlexMercedCoder/GruntReactTemplate.git",
  expressmongo: "https://github.com/AlexMercedCoder/expressmongotemplate.git",
  expresspg: "https://github.com/AlexMercedCoder/expressrestpostgres.git",
  reactsassbootstrap:
    "https://github.com/AlexMercedCoder/ReactSassRouterContextBootstrap.git",
  reactsassmaterialui:
    "https://github.com/AlexMercedCoder/ReactSassMaterialUI.git",
  reactsasscontext:
    "https://github.com/AlexMercedCoder/ReactSassContextRouter.git",
  reactstyled:
    "https://github.com/AlexMercedCoder/reactstyledcomponentscontext.git",
  reactjss: "https://github.com/AlexMercedCoder/ReactJssRouterContext",
  reactloaded: "https://github.com/AlexMercedCoder/react-fully-loaded.git",
  express: "https://github.com/AlexMercedCoder/expressdotenv.git",
  react: "git@github.com:AlexMercedCoder/reactbasicrouter.git",
  snowreact: "snowpackjs/snowpack/create-snowpack-app/app-template-react#main",
  snowvue: "snowpackjs/snowpack/create-snowpack-app/app-template-vue#main",
  snowreactts:
    "snowpackjs/snowpack/create-snowpack-app/app-template-react-typescript#main",
  snowsvelte:
    "snowpackjs/snowpack/create-snowpack-app/app-template-svelte#main",
  snowpack: "snowpackjs/snowpack/create-snowpack-app/app-template-blank#main",
  snowts:
    "snowpackjs/snowpack/create-snowpack-app/app-template-blank-typescript#main",
  snowlit:
    "snowpackjs/snowpack/create-snowpack-app/app-template-lit-element#main",
  snowlitts:
    "snowpackjs/snowpack/create-snowpack-app/app-template-lit-element-typescript#main",
  snowreactloaded: "https://github.com/AlexMercedCoder/showreactloaded.git",
  snowreacttask: "https://github.com/AlexMercedCoder/snowreacttask.git",
  expresshandlebars:
    "https://github.com/AlexMercedCoder/expresshandlebarstemplate.git",
  expressmustache:
    "https://github.com/AlexMercedCoder/expressmustachetemplate.git",
  expressmarko: "https://github.com/AlexMercedCoder/expressmarkotemplate.git",
  expresspug: "https://github.com/AlexMercedCoder/expresspugtemplate.git",
  gatsbymarkdown:
    "https://github.com/AlexMercedCoder/GatsbyMarkdownTemplate.git",
  nextmarkdown: "https://github.com/AlexMercedCoder/NextJSMarkdownTemplate.git",
  scullymarkdown:
    "https://github.com/AlexMercedCoder/scullymarkdowntemplate.git",
  sappermarkdown:
    "https://github.com/AlexMercedCoder/Sappermarkdowntemplate.git",
  gridsomemarkdown:
    "https://github.com/AlexMercedCoder/gridsomemarkdowntemplate.git",
  nuxtmarkdown: "https://github.com/AlexMercedCoder/nuxtmarkdowntemplate.git",
  gatsbyportfolio:
    "https://github.com/AlexMercedCoder/gatasbyportfoliotemplate.git",
  ezcomponent: "https://github.com/AlexMercedCoder/ezcomponent-template.git",
  jqueryts:
    "https://github.com/AlexMercedCoder/jQueryTypescriptTemplate.git#main",
  expressreactmono:
    "https://github.com/AlexMercedCoder/ExpressReactMonorepoTemplate.git#main",
  vercelfunc:
    "https://github.com/AlexMercedCoder/VercelFunctionsTemplate.git#main",
  netlifyfunc:
    "https://github.com/AlexMercedCoder/NetlifyFunctionsTemplate.git#main",
  mercedexpress: "https://github.com/AlexMercedCoder/merced-express.git#main",
  expressejsmongo:
    "https://github.com/AlexMercedCoder/expressboilerplate.git#main",
  expressejsmongosupreme:
    "https://github.com/AlexMercedCoder/ejs-express-supreme.git#main",
  mreact:
    "https://github.com:Alex-Merced-Templates/merced-react-hooks-template.git#main",
};

//selected template
const selected = templates[template];

//COMMAND LINE COLOR OBJECTS
const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  fg: {
    Black: "\x1b[30m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
    Magenta: "\x1b[35m",
    Cyan: "\x1b[36m",
    White: "\x1b[37m",
    Crimson: "\x1b[38m",
  },
  bg: {
    Black: "\x1b[40m",
    Red: "\x1b[41m",
    Green: "\x1b[42m",
    Yellow: "\x1b[43m",
    Blue: "\x1b[44m",
    Magenta: "\x1b[45m",
    Cyan: "\x1b[46m",
    White: "\x1b[47m",
    Crimson: "\x1b[48m",
  },
};

// CLONE THE REPOSITORY

if (selected) {
  console.log(
    colors.fg.Crimson,
    "BUILDING YOUR PROJECT FOLDER, BE PATIENT, IN THE MEANTIME VISIT DEVNURSERY.COM AND ALEXMERCEDCODER.COM"
  );

  const jsclone = spawnSync(`npx`, ["degit", selected, name]);
  console.log(
    jsclone.stdout ? jsclone.stdout.toString() : jsclone.stderr.toString()
  );

  console.log(
    colors.fg.Green,
    `The Project has been cloned, now follow the following steps!!!`
  );
  console.log(
    colors.fg.Blue,
    `
      - cd into project folder => ${name}
      - run command "npm install"
      - read the readme.md for further template directions
      `
  );
  console.log(
    colors.fg.Magenta,
    `Make sure to subscribe to my youtube channel, find link at AlexMercedCoder.com`
  );
} else {
  console.log(
    "Please select from one of the follow templates: react, angular, vue, svelte, amponent, mercedui, renderblocks, mblocks, componentzoo, superfunc, funcomponent, basicelement, expressreact, expressejs, expressrest, merver, reactwebp, reactrouter, koa, polka, apollo, reactredux, reactreducer, jquerywebpack, basichtml, ts, reactts, fastify, kofu, expresssocket, plainwebpack, plainrollup, commander, basicreact, reacthtml, vuehtml, angularjs, jqueryhtml, mongoexpressreact, reactrollup, nextts, gulp, grunt, gruntreact, expressmongo, expresspg, reactsassbootstrap, reactsassmaterialui, reactsasscontext, reactstyled, reactjss, reactloaded, express, snowpack, snowreact, snowvue, snowsvelte, snowlit, snowlitts, snowts, snowreactts, snowreactloaded, snowreacttask, expresshandlebars, expressmustache, expressmarko, expresspug, gatsbymarkdown, nextmarkdown, scullymarkdown, sappermarkdown, gridsomemarkdown, nuxtmarkdown, gatsbyportfolio, ezcomponent, mercedexpress, expressejsmongo, expressejsmongosupreme"
  );
}
