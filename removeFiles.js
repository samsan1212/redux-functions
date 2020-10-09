const del = require("del");

(async () => {
  const deletedFilePaths = await del(["cjs/*.js", "esm/*.js", "umd/*.js"]);
  console.log("Deleted files:\n", deletedFilePaths.join("\n"));
})();
