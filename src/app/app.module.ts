import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale
import localeEs from '@angular/common/locales/es-NI';
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VentasModule,
    SharedModule,
    AppRouterModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-NI' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
