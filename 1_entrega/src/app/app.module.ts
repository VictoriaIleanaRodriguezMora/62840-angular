import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PageStudentsModule } from './pages/page-students/page-students.module';
<<<<<<< HEAD

=======
import { StudentsModule } from './modules/students/students.module';
>>>>>>> 46c6a8154dc54b49afb8635294d428a59dc53946
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageStudentsModule,
<<<<<<< HEAD

=======
    StudentsModule
>>>>>>> 46c6a8154dc54b49afb8635294d428a59dc53946
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
