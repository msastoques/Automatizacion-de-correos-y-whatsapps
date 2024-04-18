/**
 * Automatizacion-de-correos-y-whatsapps-para-notificar-a-padres
 * @author msastoque
 * @since 13 de noviembre 2023
 */

function onOpen() {
    SpreadsheetApp.getUi().createMenu('Eugenio')
        .addItem('Herramienta para Notificar a Padres', 'mostrarBarraLateral')
        .addToUi();
}

function mostrarBarraLateral() {
    let ui = HtmlService.createHtmlOutputFromFile('BarraLaterlal').setTitle('Herramienta para Notificar a Padres');
    SpreadsheetApp.getUi().showSidebar(ui);
}

function consultarEstudiantes(asignatura, sede, grado, periodo) {

    //#region probar function
    // asignatura = 'Artes';
    // sede = 'Charquito';
    // grado = '601';
    // periodo = 'II';
    //#endregion

    if (asignatura == "" || sede == "" || grado == "" || periodo == "") {
        return {};
    }
    
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Consultar Estudiantes. Pulsa Si para continuar', ui.ButtonSet.YES_NO);

    if (respuesta == ui.Button.YES) {
        const gestor = new GestorListaCorreosAndWhatsapps();
        const listaFiltrada = gestor.getLista();

        if (listaFiltrada.length == 0) {
            ui.alert(`No hay estudiantes registrados en ${sede} - ${grado}`)
            return {};
        }

        const envio = new GestorEnvio();
        envio.enviarWhatsApp(listaFiltrada);
        //Logger.log(listaFiltrada);

    } else {
        ui.alert('Se ha cancelado el envío de correos')
    }
    return {};
}

function registrarSinEnviar(asignatura, sede, grado, periodo) {

    //#region probar function
    // asignatura = 'Artes';
    // sede = 'Charquito';
    // grado = '601';
    // periodo = 'II';
    //#endregion

    if (asignatura == "" || sede == "" || grado == "" || periodo == "") {
        return {};
    }
    
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Registrar sin enviar mensajes. Pulsa Si para continuar', ui.ButtonSet.YES_NO);

    if (respuesta == ui.Button.YES) {
        const gestor = new GestorListaCorreosAndWhatsapps();
        const listaFiltrada = gestor.getLista();

        if (listaFiltrada.length == 0) {
            ui.alert(`No hay estudiantes registrados en ${sede} - ${grado}`)
            return {};
        }

        const envio = new GestorEnvio();
        envio.registrarSinEnviar(listaFiltrada);
        //Logger.log(listaFiltrada);

    } else {
        ui.alert('Se ha cancelado el envío de correos')
    }
    return {};
}

function enviarWhatsApp(asignatura, sede, grado, periodo) {

    //#region probar function
    // asignatura = 'Artes';
    // sede = 'Charquito';
    // grado = '601';
    // periodo = 'II';
    //#endregion

    if (asignatura == "" || sede == "" || grado == "" || periodo == "") {
        return {};
    }
    
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Enviar mensajes a WhatsApp. Pulsa Si para continuar', ui.ButtonSet.YES_NO);

    if (respuesta == ui.Button.YES) {
        const gestor = new GestorListaCorreosAndWhatsapps();
        const listaFiltrada = gestor.getLista();

        if (listaFiltrada.length == 0) {
            ui.alert(`No hay estudiantes registrados en ${sede} - ${grado}`)
            return {};
        }

        const envio = new GestorEnvio();
        envio.enviarWhatsApp(listaFiltrada);
        //Logger.log(listaFiltrada);

    } else {
        ui.alert('Se ha cancelado el envío de correos')
    }
    return {};
}

function enviarCorreo(asignatura, sede, grado, periodo) {

    //#region probar function
    // asignatura = 'Artes';
    // sede = 'Charquito';
    // grado = '601';
    // periodo = 'II';
    //#endregion

    if (asignatura == "" || sede == "" || grado == "" || periodo == "") {
        return {};
    }
    
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Enviar correos. Pulsa Si para continuar', ui.ButtonSet.YES_NO);

    if (respuesta == ui.Button.YES) {
        const gestor = new GestorListaCorreosAndWhatsapps();
        const listaFiltrada = gestor.getLista();

        if (listaFiltrada.length == 0) {
            ui.alert(`No hay estudiantes registrados en ${sede} - ${grado}`)
            return {};
        }

        const envio = new GestorEnvio();
        envio.enviarCorreo(listaFiltrada);
        //Logger.log(listaFiltrada);

    } else {
        ui.alert('Se ha cancelado el envío de correos')
    }
    return {};
}

function generarPlanilla(asignatura, sede, grado, periodo) {

    //#region probar function
    // asignatura = 'Artes';
    // sede = 'Charquito';
    // grado = '601';
    // periodo = 'II';
    //#endregion

    if (asignatura == "" || sede == "" || grado == "" || periodo == "") {
        return {};
    }
    
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Generador de planillas. Pulsa Si para continuar', ui.ButtonSet.YES_NO);

    if (respuesta == ui.Button.YES) {
        const gestor = new GestorLista();
        const listaFiltrada = gestor.getLista('Tecnología e Informática',sede, grado);

        if (listaFiltrada.length == 0) {
            ui.alert(`No hay estudiantes registrados en ${sede} - ${grado}`)
            return {};
        }

        const planilla = new GestorPlanilla();
        planilla.fillPlanilla(listaFiltrada, periodo, asignatura);
        //Logger.log(listaFiltrada);

    } else {
        ui.alert('Se ha cancelado la generación de planillas')
    }
    return {};
}
