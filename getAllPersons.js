"use strict";
exports.__esModule = true;
var data_1 = require("./data");
function getAllPersons(req, res, next) {
    res.send(data_1.persons);
    next();
}
exports.getAllPersons = getAllPersons;
