const { argv, stderr } = require("process");
const { checkOptionDublicate } = require("./helpers/checkOptionDublicate");
const { checkOptionRequire } = require("./helpers/checkOptionRequire");
const { checkOptionParams } = require("./helpers/regExpHelper");
const { swithDecodeEncode } = require("./helpers/swithDecodeEncode");
const fs = require("fs");

const path = "./input.txt";



if (checkOptionRequire && checkOptionDublicate(argv)) {
  if (checkOptionParams(argv)) {
    
    if (fs.existsSync(path)) {
      // console.log("exists:", path);
      // stream
      // console.log(argv)
      swithDecodeEncode(argv);

    } else {
      console.log("DOES NOT exist:", path);
      // input 
    }
    
    


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
