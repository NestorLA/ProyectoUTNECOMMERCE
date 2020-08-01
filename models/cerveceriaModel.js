const pool = require('./../utils/bd');

getCervecerias = async () => {
    try {
        const query = "select id_cerveceria, nombre from cerveceria order by nombre";
        const rows = await pool.query(query);
        return rows;
    } catch ( error ){
        console.log(error)
    }
};

const create=async(obj)=>{
    const query="INSERT INTO ?? SET ?";
    const params=[process.env.TABLA_CERVECERIA,obj];
    const rows=await pool.query(query,params);
    return rows.insertId;
};


module.exports = {
    getCervecerias,
    create
}