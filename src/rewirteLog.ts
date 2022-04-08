import {ENVIRONMENT} from "@/config";
let ENVIRONMENT_TYPE = String(ENVIRONMENT)

export default function rewirteLog() {
  console.log = (function(log) {
    return ENVIRONMENT_TYPE == "DEVELOPMENT" ? log : function() {};
  })(console.log);
}
