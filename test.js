
Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

let fecha_inicio = new Date('2020-01-01');

let fecha_termino = new Date('2021-01-05')


while(fecha_inicio <= fecha_termino){
    console.log(fecha_inicio)
    fecha_inicio = fecha_inicio.addDays(1)
}

/* if(fecha_inicio > fecha_termino){
    console.log('la fecha de inicio es mayor')
}else if(fecha_inicio.getTime() < fecha_termino.getTime()){
    console.log('la fecha de inicio es menor', fecha_inicio, fecha_termino)
}else if(fecha_inicio.getTime() === fecha_termino.getTime()){
    console.log('la fecha de inicio es igual')
}
 */

