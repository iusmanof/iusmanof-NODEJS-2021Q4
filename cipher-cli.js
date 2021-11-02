const { argv, stderr } = require("process");
const { checkOptionDublicate } = require("./helpers/checkOptionDublicate");
const { checkOptionRequire } = require("./helpers/checkOptionRequire");
const { checkOptionParams } = require("./helpers/regExpHelper");
const { swithDecodeEncode } = require("./helpers/swithDecodeEncode");

if (checkOptionRequire && checkOptionDublicate(argv)) {
  if (checkOptionParams(argv)) {
    // const path = "./input.txt";

    // if (fs.existsSync(path)) {
    //   // path exists
    //   console.log("exists:", path);
    // } else {
    //   console.log("DOES NOT exist:", path);
    // }

    swithDecodeEncode(argv);


  } else {
    stderr.write("Config must have param. For example -c C1-R0-A");
  }
} else {
  stderr.write("Config option is required. Need -c/--config");
}

// 3. input check
// 4. input stream write
// 5. output check
// 6. iuutput stream write
// 7. transform stream 4.- 6.
// 8. pipe / pipeline
