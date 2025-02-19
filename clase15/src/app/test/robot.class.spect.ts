import { Robot } from './robot.class';

describe('Pruebas de la clase Robot', () => {
  let myRobot = new Robot('Goku');

/* sin el before each la instancia seria la misma para todas las pruebas, y puede pasar que una prueba, contamine la sig. y que no sea un error de la prueba si no que se contaminó| */
  beforeEach(() => {
    myRobot = new Robot('Goku');
  });

  it('Debe asignarse al propietario', () => {
    expect(myRobot.propietario).toBe('Goku');
  });

  it('La bateria debe estar al 100 al crear un robot', () => {
    expect(myRobot.bateria).toBeGreaterThanOrEqual(100);
  });

  it('encender() debe saludar al propietario, disminuir la bateria en 10 y establecer encendido en true', () => {
    const spyOnConsoleLog = spyOn(console, 'log');
    myRobot.encender();
    expect(spyOnConsoleLog).toHaveBeenCalledOnceWith('¡Hola, Goku!');
    expect(myRobot.bateria).toBe(90);
    expect(myRobot.encendido).toBeTrue();
  });

  it(`Las acciones del robot debe contener 'limpia', 'compra', 'vigila'`, () => {
    // expect(myRobot.acciones).toEqual(['limpia', 'compra', 'vigila']);
    expect(myRobot.acciones).toContain('limpia');
    expect(myRobot.acciones).toContain('compra');
    expect(myRobot.acciones).toContain('vigila');
  });
});