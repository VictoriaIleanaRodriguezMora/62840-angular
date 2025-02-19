import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

/* El describe agrupa casos de prueba por caracteristica
El primer parametro es la descripcion de las pruebas, y el 2do es un callback 
*/

/* delante del describe puedo poner una f: fdescribe o una x: xdescribe
Con la f, significa que sólo va a ejecutar esa prueba, hace foco en esa
Con la x, no va a ejecutar esa prueba, la ignora


Se podra ignorar los it?


*/
describe('AppComponent', () => {
  /* before each se ejecuta ANTES de CADA CASO  de prueba 
  En este modulo está configurado todo para que la prueba funcione. Allí deberia estar declarado o importado todo lo necesario para realizar las pruebas
  */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      /* si voy a realizar ´pruebas en al AppComponente, me tengo que asegurar que esté declarado */
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  /* define cada caso de prueba */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'b'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('b');
  });

  /* no tieene sentido seguir renderizando esto, porque ya no es parte de mi app, entonces el error se quita. IMPORTANTE se actualiza en tiempo real el servidor de pruebas */
  /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, b');
  }); */
});
