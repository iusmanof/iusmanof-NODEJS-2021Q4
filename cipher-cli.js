const { argv, stderr } = require("process");
const { checkOptionDublicate } = require("./helpers/checkOptionDublicate");
const { checkOptionRequire } = require("./helpers/checkOptionRequire");
const { checkOptionParams } = require("./helpers/regExpHelper");
const { swithDecodeEncode } = require("./helpers/swithDecodeEncode");

if (checkOptionRequire && checkOptionDublicate(argv)) {
  if (checkOptionParams(argv)) {
    swithDecodeEncode(argv);
  }
} else {
  stderr.write("Config option is required");
}

// 3. input check
// 4. input stream write
// 5. output check
// 6. iuutput stream write
// 7. transform stream 4.- 6.
// 8. pipe / pipeline
