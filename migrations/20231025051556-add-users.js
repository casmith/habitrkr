'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = (options, seedLink) => {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = (db) => db.createTable('users', {
      columns: {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        name: { type: 'string', notNull: true },
        timestamp: { type: 'timestamp', notNull: true, defaultValue: 'NOW()'}
      }
    })
    .then(() => db.addForeignKey('check_ins', 'users', 'fk_check_ins__users', {
      "user_id": "id"
    }))
    .then(() => db.insert('users', ['id', 'name'], [1, 'clay']));

exports.down = (db) => db.removeForeignKey('check_ins', 'fk_check_ins__users', { dropIndex: true })
    .then(() => db.dropTable('users'));

exports._meta = {
  "version": 1
};
