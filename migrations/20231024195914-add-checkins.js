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
  return db.createTable('check_in', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      user_id: { type: 'int', notNull: true },
      label: { type: 'string', notNull: true },
      amount: { type: 'int', notNull: true },
      check_in_date: { type: 'date', notNull: true},
      timestamp: { type: 'timestamp', notNull: true, defaultValue: 'NOW()'}
    }
  });
};

exports.down = function(db) {
  return db.dropTable('check_in');
};

exports._meta = {
  "version": 1
};
