import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouteModule } from './app-routing.module';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
