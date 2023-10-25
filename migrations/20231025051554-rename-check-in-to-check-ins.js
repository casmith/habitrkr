'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.renameTable('check_in', 'check_ins');
};

exports.down = function(db) {
  return db.renameTable('check_ins', 'check_in');
};

exports._meta = {
  "version": 1
};
