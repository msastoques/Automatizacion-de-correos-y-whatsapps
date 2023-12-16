

function getAsignaturas() {
    const gestor = new GestorLista();

    let lista = gestor.getAsignaturas();

    //return {Asignaturas: lista};
    return lista;
}

function getSedes() {
    const gestor = new GestorLista();

    let lista = gestor.getSedes();
    
    return lista;
}

function getGrados() {
    const gestor = new GestorLista();

    let lista = gestor.getGrados();
    
    return lista;
}

function getPeriodos() {
    const gestor = new GestorLista();

    let lista = gestor.getPeriodos();
    
    return lista;
}