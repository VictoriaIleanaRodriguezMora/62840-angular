import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './modules/dashboard/dashboard.module';
// import { ToolbarComponent } from './modules/components/toolbar/toolbar.component';
// import { StudentsComponent } from './modules/pages/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    // ToolbarComponent,
    // StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
