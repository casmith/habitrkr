
const { Pool } = require('pg');
const _ = require('lodash');

module.exports = class GoalsRepository {

    constructor(poolArgs) {
        this.pool = new Pool(poolArgs);        
    }

    async insert(userId, label, target, period) {

        const text = `INSERT INTO goals (
            user_id,
            label,
            target,
            period
        ) values (
            $1,
            $2,
            $3,
            $4
        );`;
        const params = [userId, label, target, period];
        try {
            await this.pool.query(text, params);
        } catch (e) {
            console.log(e);
            throw new Error("database error");
        }
    }

    async find(query) {

        const sql = "select * from goals where user_id = $1"
        const params = [query.userId];

        try {
            const res = await this.pool.query(sql, params);
            return res.rows;
        } catch (e) {
            console.log(e);
            throw new Error("database error");
        }
    }

    async get(id) {
        const sql = "select * from goals where id = $1"
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