"use strict";
exports.__esModule = true;
var http_status_codes_1 = require("http-status-codes");
var restify_errors_1 = require("restify-errors");
var data_1 = require("./data");
function addPerson(req, res, next) {
    if (!req.body.id || !req.body.email) {
        next(new restify_errors_1.BadRequestError('Missing mandatory member(s)'));
    }
    else {
        var newPersonId_1 = parseInt(req.body.id);
        if (!newPersonId_1) {
            next(new restify_errors_1.BadRequestError('ID has to be a numeric value'));
        }
        else {
            //in case the specified id already exists
            var customerIndex = data_1.persons.findIndex(function (c) { return c.id === newPersonId_1; });
            if (customerIndex !== (-1)) {
                res.send(http_status_codes_1.CONFLICT, 'an element with the specified ID already exists');
            }
            else {
                var newPerson = {
                    id: newPersonId_1,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email
                };
                data_1.persons.push(newPerson);
                res.send(http_status_codes_1.CREATED, newPerson, { Location: req.path() + "/" + req.body.id });
            }
        }
    }
}
exports.addPerson = addPerson;
