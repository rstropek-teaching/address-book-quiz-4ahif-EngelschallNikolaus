"use strict";
exports.__esModule = true;
var http_status_codes_1 = require("http-status-codes");
var restify_errors_1 = require("restify-errors");
var data_1 = require("./data");
function deletePerson(req, res, next) {
    var id = parseInt(req.params.id);
    if (id) {
        var customerIndex = data_1.persons.findIndex(function (c) { return c.id === id; });
        if (customerIndex !== (-1)) {
            data_1.persons.splice(customerIndex, 1);
            res.send(http_status_codes_1.NO_CONTENT);
            next();
        }
        else {
            next(new restify_errors_1.NotFoundError());
        }
    }
    else {
        next(new restify_errors_1.BadRequestError('Parameter id must be a number'));
    }
}
exports.deletePerson = deletePerson;
