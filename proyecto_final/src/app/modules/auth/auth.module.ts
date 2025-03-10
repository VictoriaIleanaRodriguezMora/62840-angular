import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authReducer } from './login/store/auth/auth.reducer';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature(authFeatureKey, authReducer) 

  ]
})
export class AuthModule { }
