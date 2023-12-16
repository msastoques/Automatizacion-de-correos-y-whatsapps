/**
 * Clase que trae los datos de la hoja de cálculo.
 * @author msastoque
 */

class GestorLista {
    constructor() {
        this._hojaActual = getLista();
        this._sede = [];
        this._grado = [];
        this._asignatura = [];
        this._periodo = [];
        this._listaCompleta = [];
        this._lista = [];
    }

    getLista(asignatura, sede, grado) {
        this._listaCompleta = this._hojaActual.getDataRange().getValues();

        this._lista = this._listaCompleta.filter(fila =>fila[0] == true && fila[4] == grado && fila[5] == sede && fila[7] == asignatura);

        return this._lista;
    }


    getListaCompleta() {
        this._listaCompleta = this._hojaActual.getDataRange().getValues();

        return this._listaCompleta;
    }


    getAsignaturas() {

        const inicio = 2;
        const fin = 20;
        const rango = this._hojaActual.getRange('Z' + inicio + ':Z' + fin);
        this._asignatura = [];

        const hasta = (fin - inicio + 2);
        for (let i = 1; i < hasta; i++) {
            let dato = rango.getCell(i, 1).getValue();
            if (dato == "") break;
            this._asignatura.push(dato);
        }
        return this._asignatura;
    }

    getSedes() {

        const inicio = 2;
        const fin = 13;
        const rango = this._hojaActual.getRange('AB' + inicio + ':AB' + fin);
        this._sede = [];

        const hasta = (fin - inicio + 2);
        for (let i = 1; i < hasta; i++) {
            let dato = rango.getCell(i, 1).getValue();
            if (dato == "") break;
            this._sede.push(dato);
        }
        return this._sede;
    }

    getGrados() {

        const inicio = 2;
        const fin = 27;
        const rango = this._hojaActual.getRange('AA' + inicio + ':AA' + fin);
        this._grado = [];

        const hasta = (fin - inicio + 2);
        for (let i = 1; i < hasta; i++) {
            let dato = parseInt(rango.getCell(i, 1).getValue()).toFixed(0);
            if (isNaN(dato)) break;
            this._grado.push(dato);
        }
        return this._grado;
    }

    getPeriodos() {

        const inicio = 2;
        const fin = 5;
        const rango = this._hojaActual.getRange('Y' + inicio + ':Y' + fin);
        this._periodo = [];

        const hasta = (fin - inicio + 2);
        for (let i = 1; i < hasta; i++) {
            let dato = rango.getCell(i, 1).getValue();
            if (dato == "") break;
            this._periodo.push(dato);
        }
        return this._periodo;
    }
}

//#region prueba

// function prueba() {
//     const gestor = new GestorLista();

//     let lista = gestor.getGrados();

//     Logger.log(lista)
// }

//#endregion