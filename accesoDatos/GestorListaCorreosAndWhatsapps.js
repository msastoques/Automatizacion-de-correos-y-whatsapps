/**
 * Clase que trae los datos de la hoja de cálculo.
 * @author msastoque
 */

class GestorListaCorreosAndWhatsapps {
    constructor() {
        this._hojaActual = getHojaEnvio();
        this._sede = [];
        this._grado = [];
        this._asignatura = [];
        this._periodo = [];
        this._listaCompleta = [];
        this._lista = [];
    }

    getLista() {
        this._listaCompleta = this._hojaActual.getDataRange().getValues();

        this._lista = this._listaCompleta.filter(fila =>fila[6] == true);

        return this._lista;
    }


}

//#region prueba

// function prueba() {
//     const gestor = new GestorLista();

//     let lista = gestor.getGrados();

//     Logger.log(lista)
// }

//#endregion