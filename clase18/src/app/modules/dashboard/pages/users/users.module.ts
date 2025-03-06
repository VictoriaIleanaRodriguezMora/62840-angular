import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/user.reducer';
import { userFeatureKey } from './store/user.reducer';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature(userFeatureKey, userReducer), // Asegúrate de que el reducer esté bien configurado
  ]
})
export class UsersModule {
  constructor() {
    console.log('UsersModule cargado'); // Verifica si el mensaje aparece en la consola
  }
}
