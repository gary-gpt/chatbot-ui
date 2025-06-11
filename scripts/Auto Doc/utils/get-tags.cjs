const tagRules = require("../../tag-rules.cjs");

module.exports = function getTags(filePath) {
  return tagRules
    .filter((rule) => rule.match.test(filePath))
    .map((rule) => rule.tag);
};
