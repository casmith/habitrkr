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
  return db.createTable('goals', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      user_id: { 
        type: 'int',
        foreignKey: {
          name: 'fk_goals_user_id',
          table: 'users',
          rules: {
           onDelete: 'CASCADE',
           onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
      label: { type: 'string', notNull: true },
      target: { type: 'int', notNull: true },
      period: { type: 'string', notNull: true }, // day, week, month,

    }
  });
};

exports.down = function(db) {
  return db.dropTable('goals');
};

exports._meta = {
  "version": 1
};
