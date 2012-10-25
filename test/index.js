// This file will get compiled by Modulr and served as /tubbs.js
var assert = require('assert');
var transformers = require('../index');

describe('json-transformer', function() {
  var snake_case_object = {
    property: "some value",
    another_property: "another value",
    one_more_property: "one more value"
  };

  var stringified_snake_case_object = JSON.stringify(snake_case_object);

  var camelCaseObject = {
    property: "some value",
    anotherProperty: "another value",
    oneMoreProperty: "one more value"
  };

  var stringifiedCamelCaseObject = JSON.stringify(camelCaseObject);

  it('underscoreToCamel should convert an object with snake_case keys to camelCase', function() {
    var camelized = transformers.underscoreToCamel(stringified_snake_case_object);
    assert.equal(stringifiedCamelCaseObject, camelized);
  });

  it('camelToUnderscore should convert an object with camelCase keys to snake_case', function() {
    var snaked = transformers.camelToUnderscore(stringifiedCamelCaseObject);
    assert.equal(stringified_snake_case_object, snaked);
  });
});
