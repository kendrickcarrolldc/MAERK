'use strict';

import _ from 'lodash';
import Report from './report.model';


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
		console.log(updates)
    var updated = _.extend(entity, updates);
		console.log(updated)
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
	
  return function(entity) {
			
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
		console.log(err) // this will console log the error in the terminal
    res.status(statusCode).send(err);
  };
}

// Gets a list of Reports
export function index(req, res) {
  return Report.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Report from the DB
export function show(req, res) {
  return Report.findById(req.params.id).exec()
	console.log("its working")
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Report in the DB
export function create(req, res) {
  return Report.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Report in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Report.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Report from the DB
export function destroy(req, res) {
  return Report.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
