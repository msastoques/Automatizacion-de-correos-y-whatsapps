/**
 * Clase que genera el auxiliar de planilla.
 * @author msastoque
 */

class GestorPlanilla {
    constructor() {
        this._hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    }

    fillPlanilla(data, periodo, asignatura,fecha, falta, conducto) {
        //Borrar datos
        this._hojaActual.getRange('A' + 2 + ':L' + 60).clearContent();

        //llenar datos
        
        
        let datos = [];

        data.forEach(element => {
            datos.push([element[5], element[4], asignatura,periodo, element[1], element[6],, element[16], element[17],falta,conducto,,fecha])
        });
        //Logger.log(datos);

        const rango = this._hojaActual.getRange('A' + 2 + ':M' + (datos.length + 1));
        rango.setValues(datos);

        
    }

    fillPlanillaUnoAUno(datos, periodo) {
        const rango = this._hojaActual.getRange('B' + 5 + ':F' + 40);

        let contador = 1;
        datos.forEach(element => {
            rango.getCell(contador, 1).setValue(element[6]);
            contador++;
        });
    }
}