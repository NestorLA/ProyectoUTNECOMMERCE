const pool = require('./../utils/bd');

getCervecerias = async () => {
    try {
        const query = "select id_cerveceria, nombre from cerveceria order by id_cerveceria";
        const rows = await pool.query(query);
        return rows;
    } catch ( error ){
        console.log(error)
    }
};

module.exports = {
    getCervecerias
}