class Animal {
  constructor(especie, nombre, peso, rasgo) {
    this.especie = especie;
    this.nombre = nombre;
    this.peso = peso;
    this.rasgo = rasgo;
  }

  // Métodos normales (sin get/set)
  hablar() {
    return `${this.nombre} hace miaaww!!`;
  }

  correr(velocidad) {
    return `${this.nombre} corre a ${velocidad} km/h`;
  }

  // Getter y Setter nativos
  get obtenerPeso() {
    return this.peso + "kg";
  }

  set cambiarPeso(nuevoPeso) {
    this.peso = nuevoPeso;
  }

  get obtenerInfo() {
    return `
      <h2>${this.especie}</h2>
      <ul>
      <li> Nombre: ${this.nombre}</li>
      <li> Peso: ${this.obtenerPeso}</li>
      <li> Rasgo: ${this.rasgo}</li>
      </ul>
    `;
  }
}

const gato1 = new Animal("Gato", "Cofferingo", 20, "Gordo");
const info1 = document.createElement("p");
info1.innerHTML = gato1.obtenerInfo;
document.getElementById("container").appendChild(info1);
//Agregar otro aninal al html
const gato2 = new Animal("Gato", "Bolichi", 20, "Obesa");
// crear info2 de tipo p
const info2 = document.createElement("p");
info2.innerHTML = gato2.obtenerInfo;
document.getElementById("container").appendChild(info2);


class Perro extends Animal{
    constructor(especie, nombre, peso, rasgo, raza){
        super(especie, nombre, peso, rasgo);
        this.raza = raza;
    }

    ladrar(){
        return `${this.nombre} WOOF WOOF`;
    }
    get obtenerInfo(){
        return `
        <h2>${this.especie}</h2>
        <ul>
        <li> Nombre: ${this.nombre}</li>
        <li> Peso: ${this.obtenerPeso}</li>
        <li> Rasgo: ${this.rasgo}</li>
        <li> Raza: ${this.raza}</li>
        </ul>
      `;
    }
}

const perro1 = new Perro("Perro", "Firulay", 20, "Coqueto", "Pastor Aleman");
const info3 = document.createElement("p");
info3.innerHTML = perro1.obtenerInfo;
document.getElementById("container").appendChild(info3);

const title2 = document.createElement("h2");
title2.innerHTML = "Personas";
document.getElementById("container").appendChild(title2);
const lineDiv = document.createElement("hr");
lineDiv.setAttribute("style", "width: 100% ; background-color: black; height: 2px;");
document.getElementById("container").appendChild(lineDiv);

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  // metodos estaticos ( se pueden usar sin instanciar la clase)
  static saludar() {
    return alert("Class Persona: Hola mundo");
  }
  get obtenerInfo() {
    return `
      <h2>${this.nombre}</h2>
      <ul>
      <li> Nombre: ${this.nombre}</li>
      <li> Apellido: ${this.apellido}</li>
      <li> Edad: ${this.edad}</li>
      </ul>
    `;
  }
}

const persona1 = new Persona("Juan", "Perez", 20);
const info4 = document.createElement("p");
info4.innerHTML = persona1.obtenerInfo;
document.getElementById("container").appendChild(info4);

// Persona.saludar();
