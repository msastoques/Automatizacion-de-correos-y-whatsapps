/**
 * Clase que envía correos y whatsapps.
 * @author msastoque
 */

class GestorEnvio {
    constructor() {
        this._hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
    }

    registrarSinEnviar(listaFiltrada) {
        listaFiltrada.forEach(element => {

            element[21] = '';
            element[22] = '';
            element[23] = '';
            element[24] = '';
            element[25] = '';
            element[6] = 'Sin enviar';
        });
        this.registrarEnvioCorreo(listaFiltrada);
    }

    enviarWhatsApp(listaFiltrada) {
        listaFiltrada.forEach(element => {

            element[21] = '';
            element[22] = '';
            element[23] = '';
            element[24] = '';
            element[25] = '';

            let image = DriveApp.getFileById("1cqpugDW8z-buVUwiXcEw3rfcbyeiamc3").getAs("image/png")
            
            try {
                //#region enviar correos
                

                //let url = 'https://api.whatsapp.com/send?phone=' + destinatario + '&text=' + asunto;

                 let url = element[15];
               
                
                Utilities.sleep(1000);

                openUrl(url);

                

                element[6] = 'WhatsApp';
            } catch (error) {
                element[6] = 'Sin enviar';
            }



        });
        this.registrarEnvioCorreo(listaFiltrada);
    }

    enviarCorreo(listaFiltrada) {
        listaFiltrada.forEach(element => {

            element[21] = '';
            element[22] = '';
            element[23] = '';
            element[24] = '';
            element[25] = '';

            let image = DriveApp.getFileById("1cqpugDW8z-buVUwiXcEw3rfcbyeiamc3").getAs("image/png")
            
            try {
                //#region enviar correos
                let destinatario = element[7];
                let asunto = element[13];
                let cuerpo = element[14];
                

                GmailApp.sendEmail(destinatario, asunto, cuerpo,{attachments: [image]})

                //envio con el cuerpo en html
                // MailApp.sendEmail({
                //     to: destinatario,
                //     subject: asunto,
                //     htmlBody: cuerpo
                // })

                
                //envio con archivo adjunto
                //GmailApp.sendEmail(destinatario, asunto, cuerpo, { attachments: [docPdf] })

                //#endregion

                element[6] = 'Correo';
            } catch (error) {
                element[6] = 'Sin enviar';
            }



        });
        this.registrarEnvioCorreo(listaFiltrada);
    }

    registrarEnvioCorreo(listaFiltrada) {
        const numFilas = sumarRegistroContador(listaFiltrada.length);

        const rango = this._hojaActual.getRange('A' + numFilas[0] + ':Z' + (numFilas[1] - 1));
        rango.setValues(listaFiltrada);
    }
}

function sumarRegistroContador(num) {
    let hojaRegistro = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
    const numActual = hojaRegistro.getRange('Z' + 1).getValue();
    const numLuego = (numActual + num);
    hojaRegistro.getRange('Z' + 1).setValue(numLuego);

    return [numActual, numLuego];
}


//#region probar
function probar() {
    sumarRegistroContador(3);
}
//#endregion