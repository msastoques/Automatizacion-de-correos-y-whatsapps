function borrarHojaActiva() {
    SpreadsheetApp.getActiveSheet().clearContents();
}

function borrarCelda() {
    SpreadsheetApp.getCurrentCell().clearContent();
}

function borrarCeldaAndFormato() {
    SpreadsheetApp.getCurrentCell().clearContent().clearFormat();
}

function borrarRango(rango) {
    SpreadsheetApp.getActiveSheet().getRange(rango).clearContent();
}