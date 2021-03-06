const corsProxy = require("cors-anywhere");

if (process.env.NODE_ENV !== "production")
  require("dotenv").config();

const app = corsProxy.createServer({
  requireHeader: ['origin', 'x-requested-with', "permit-by-nabatti99"],
  removeHeaders: ['cookie', 'cookie2']
}).listen(process.env.PORT, () => {
  console.log("App is running on port " + process.env.PORT);
});