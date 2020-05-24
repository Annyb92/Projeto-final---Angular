import { Component, OnInit } from '@angular/core';
import { Venda } from './servico/venda';
import { Produto } from 'src/app/produto/servico/produto';
import { Router } from '@angular/router';
import { VendaService } from './servico/venda.service';
import { ProdutoService } from 'src/app/produto/servico/produto.service';
import { Cliente } from '../cliente/servico/cliente';
import { ClienteService } from '../cliente/servico/cliente.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
  venda: Venda = new Venda();
  selecionado: Venda;

  listaVenda: Venda[] = [];

  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private vendaService: VendaService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {

    this.clienteService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    let codigoCliente= '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        
      }
    );
  }

  pesquisar(){
    
    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaService.consultar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
        
      }
    );   
  }
  incluir(){    
    this.router.navigate(['/venda/incluir']);
  }

  

  remover(){

    this.vendaService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

}
