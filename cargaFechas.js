const pool = require('./config/db')

Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let fecha_inicio = new Date('2020-12-31');
let fecha_termino = new Date('2021-12-31')


while(fecha_inicio < fecha_termino){
    fecha_inicio = fecha_inicio.addDays(1)
    console.log(fecha_inicio)
    let fecha_inicio_format = fecha_inicio.toISOString().split('T')[0]
    console.log(fecha_inicio_format)
    let query = `INSERT IGNORE INTO tb_reportes_produccion_fechas (fecha,hecho) VALUES ('${fecha_inicio_format}', 0);`
    pool.query(query, function (error, results, fields) {
        if (error) throw error;
    })  
}