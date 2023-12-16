class ListaModel {
    constructor() {
      this._grado = 0;
      this._sede = '';
      this._estudiante = '';
      this._asignatura = '';
      this._p1 = 0;
      this._p2 = 0;
      this._p3 = 0;
      this._p4 = 0;
    }
  
    // Getter y Setter para Grado
    get grado() {
      return this._grado;
    }
  
    set grado(value) {
      this._grado = value;
    }
  
    // Getter y Setter para Sede
    get sede() {
      return this._sede;
    }
  
    set sede(value) {
      this._sede = value;
    }
  
    // Getter y Setter para Estudiante
    get estudiante() {
      return this._estudiante;
    }
  
    set estudiante(value) {
      this._estudiante = value;
    }
  
    // Getter y Setter para Asignatura
    get asignatura() {
      return this._asignatura;
    }
  
    set asignatura(value) {
      this._asignatura = value;
    }
  
    // Getter y Setter para P1
    get p1() {
      return this._p1;
    }
  
    set p1(value) {
      this._p1 = value;
    }
  
    // Getter y Setter para P2
    get p2() {
      return this._p2;
    }
  
    set p2(value) {
      this._p2 = value;
    }
  
    // Getter y Setter para P3
    get p3() {
      return this._p3;
    }
  
    set p3(value) {
      this._p3 = value;
    }
  
    // Getter y Setter para P4
    get p4() {
      return this._p4;
    }
  
    set p4(value) {
      this._p4 = value;
    }
  }
  
  // Ejemplo de uso
//   let lista = new listaModel();
//   lista.grado = 10;
//   lista.sede = 'Sede A';
//   lista.estudiante = 'Juan Pérez';
//   lista.asignatura = 'Matemáticas';
//   lista.p1 = 85;
//   lista.p2 = 90;
//   lista.p3 = 88;
//   lista.p4 = 92;
  
//   console.log(lista);