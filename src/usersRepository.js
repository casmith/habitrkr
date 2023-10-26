
const { Pool } = require('pg');
const _ = require('lodash');

module.exports = class UsersRepository {

    constructor(poolArgs) {
        this.pool = new Pool(poolArgs);        
    }

    async insert(name) {

        const text = `INSERT INTO users (
            name
        ) values (
            $1
        );`;
        const params = [name];
        try {
            const res = await this.pool.query(text, params);
            return res.rows[0];
        } catch (e) {
            console.log(e);
            throw new Error("database error");
        }
    }

    async find(query) {
        let i = 1;
        
        let sql = "select * from users where name = $1"
        const params = [query.name];

        try {
            const res = await this.pool.query(sql, params);
            return res.rows;
        } catch (e) {
            console.log(e);
            throw new Error("database error");
        }
    }

    async get(id) {
        let i = 1;
        
        let sql = "select * from users where id = $1"
        const params = [id];

        try {
            const res = await this.pool.query(sql, params);
            return res.rows;
        } catch (e) {
            console.log(e);
            throw new Error("database error");
        }
    }

  }; 