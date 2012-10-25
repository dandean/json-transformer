module.exports = {
  camelToUnderscore: underscore,
  underscoreToCamel: camelize
};

/**
 * underscore(str) -> String
 * - str (String): Stringified JSON.
 *
 * Converts all keys in the stringified JSON from camelCase to snake_case.
**/
function underscore(str) {
  var result = str
    .replace(/(,|{)(\s*")([a-z0-9]+)(":)/ig, function(match, separator, prefix, key, suffix, offset, value) {
      key = key.replace(/([A-Z]+)([A-Z][a-z])/g, function(match, part1, part2) { return (part1 + '_' + part2).toLowerCase(); })
               .replace(/([a-z\d])([A-Z])/g, function(match, part1, part2) { return (part1 + '_' + part2).toLowerCase(); });
      return separator + prefix + key + suffix;
    });
  return result;
}

/**
 * camelize(str) -> String
 * - str (String): Stringified JSON.
 *
 * Converts all keys in the stringified JSON from snake_case to camelCase.
**/
function camelize(str) {
  if (!str || (str && !str.match(/_/))) return str;
  var result = str.replace(/(,|{)(\s*")([a-z0-9]+_\w+)(":)/g, function(match, separator, prefix, key, suffix, offset, value) {
    return separator + prefix + key.replace(/_+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    }) + suffix;
  });
  return result;
}
