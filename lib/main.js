var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: "https://bugzilla.mozilla.org/*",
  contentScriptFile: self.data.url("addShortURL.js")
});
