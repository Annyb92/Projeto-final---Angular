import { Component, OnInit } from '@angular/core';
import { Venda } from '../servico/venda';
import { VentaItem } from '../servico/ventaitem';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/servico/cliente.service';
import { VendaService } from '../servico/venda.service';
import { Produto } from 'src/app/produto/servico/produto';
import { ProdutoService } from 'src/app/produto/servico/produto.service';

@Component({
  selector: 'app-venda-manter',
  templateUrl: './venda-manter.component.html',
  styleUrls: ['./venda-manter.component.scss']
})
export class VendaManterComponent implements OnInit {
  operacao: string = 'Incluir';

  venda: Venda = new Venda();

  ventaItem: VentaItem = new VentaItem();

  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private vendaService: VendaService,
    private produtoService: ProdutoService,
    private clienteService:ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );
    
    this.produtoService.consultar('').subscribe(
      data => {
        this.listaProduto= <Produto[]>data;
      }
    );
    
  }
  voltar(){
    this.router.navigate(['/venda']);
  }

  incluir(){
    this.vendaService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/venda']);        
      }
    );
  }
  
  adicionar(){

    this.venda.listaVentaItem.push(this.ventaItem);
    this.ventaItem = new VentaItem();

  }

  removercurso(ventaItem){

    this.venda.listaVentaItem = this.venda.listaVentaItem.filter(obj => obj !== ventaItem);

  } 







}
