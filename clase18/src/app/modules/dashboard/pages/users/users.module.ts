import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeature, userFeatureKey } from './store/user.reducer';
import { SharedModule } from '../../../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature(userFeature),
    EffectsModule.forFeature([UserEffects]) // ✅ Solo se carga cuando se accede a /users
  ]
})
export class UsersModule {
  constructor() {
    console.log('UsersModule cargado'); // 👀 Verifica esto en consola
  }
}
