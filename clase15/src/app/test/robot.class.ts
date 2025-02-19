export class Robot {
    encendido = false;
    bateria = 100;
    acciones = ['compra', 'vigila', 'limpia'];
    propietario: string;
  
    constructor(propietario: string) {
      this.propietario = propietario;
    }
  
    encender(): void {
      console.log(`¡Hola, ${this.propietario}!`);
      this.bateria -= 10;
      this.encendido = true;
    }
  }