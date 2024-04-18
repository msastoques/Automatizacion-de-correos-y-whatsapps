/**
 * Clase que genera la lista de anotaciones por estudiantes.
 * @author msastoque
 */

class GestorConsulta {
    constructor() {
        this._hojaActual = getListaCorreos();
        this._listaCompleta = [];
        this._hojaRegistro = getRegistro();      
    }

    getLista() {
        this._listaCompleta = this._hojaActual.getDataRange().getValues();

        this._lista = this._listaCompleta.filter(fila =>fila[6] == true);

        return this._lista;
    }
}