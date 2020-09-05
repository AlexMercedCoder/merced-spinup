#!/usr/bin/env node

const { exec, spawnSync } = require("child_process");

const [, , template, name] = process.argv;

//Templates
const templates = {
  amponent: "https://github.com/AlexMercedCoder/amponent-parcel-template.git",
  basicelement: "https://github.com/AlexMercedCoder/BasicElementTemplate.git",
  funcomponent: "https://github.com/AlexMercedCoder/funComponent-template.git",
  react:
    "https://github.com/AlexMercedCoder/Alex-Merced-React-Parcel-Template.git",
  renderblocks: "https://github.com/AlexMercedCoder/renderblocks-template.git",
  mercedui: "https://github.com/AlexMercedCoder/mercedui-template-webpack.git",
  vue: "https://github.com/AlexMercedCoder/vue-router-buefy-template.git",
  superfunc: "https://github.com/AlexMercedCoder/superfunc-template.git",
  mblocks: "https://github.com/AlexMercedCoder/mBlocks-template.git",
  componentzoo: "https://github.com/AlexMercedCoder/componentzoo-template.git",
  angular: "https://github.com/AlexMercedCoder/angular-template.git",
  svelte: "https://github.com/AlexMercedCoder/svelte-template.git",
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

  const jsclone = spawnSync(`git`, ["clone", selected, name]);
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
      - run command "npm run dev" and have fun developing
      `
  );
  console.log(
    colors.fg.Magenta,
    `Make sure to subscribe to my youtube channel, find link at AlexMercedCoder.com`
  );
} else {
  console.log(
    "Please select from one of the follow templates: react, angular, vue, svelte, amponent, mercedui, renderblocks, mblocks, componentzoo, superfunc, funcomponent, basicelement"
  );
}
