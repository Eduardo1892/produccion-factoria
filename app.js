const pool = require('./config/db')
 


pool.query('SELECT fecha FROM tb_reportes_produccion_fechas WHERE hecho = 0', function (error, results, fields) {
    if (error) throw error;
    for(let result of results){
        console.log(result)
    }
})


/* pool.query('CALL CPMLineaProduccionUsuarios("20210407")', function (error, results, fields) {
  if (error) throw error;
  console.log('Respuesta: ', results[0]);
}); */

