import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo Personalizado
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de nuestra app (pais)
import localeEs from '@angular/common/locales/es-MX';//Español Mexico
import localeFr from '@angular/common/locales/fr';//Español Mexico
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);
registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [{provide: LOCALE_ID, useValue:'es-MX'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
