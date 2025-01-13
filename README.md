![alt text](clase06/src/assets/image.png)

La linea 2, es inyeccion de dependencias del FormBuilder, permite definir un grupo de controles, estos son cada uno de los inputs que estan en mi formulario. 
Cada uno define un campo del formulario, pueden tener valores por defecto o no. Esto es definir un formulario del lado del .ts, despues hay que comunicarlo con el html 

ng g c components/template-driven --standalone=false

ng g c components/reactive-forms --standalone=false

El paquete de formularios viene instalado pero no importado. 

Esto para reactive forms: 
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({ 
    ...,
    imports: [ReactiveFormsModule],
    ...    
})

El modelo de formulario se define en el .ts

Se define casi todo en el .ts

Los formularios deben estar validados, es una mala practica que no lo esten





