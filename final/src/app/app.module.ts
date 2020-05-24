import { ClienteService } from './cliente/servico/cliente.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';
import { VendaManterComponent } from './venda/venda-manter/venda-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    ClienteComponent,
    ProdutoComponent,
    VendaComponent,
    ClienteManterComponent,
    ProdutoManterComponent,
    VendaManterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
