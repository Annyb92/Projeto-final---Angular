import { Component, OnInit } from '@angular/core';
import { Produto } from './servico/produto';
import { Router } from '@angular/router';
import { ProdutoService } from './servico/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  selecionado: Produto;

  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.produtoService.consultar(this.produto.nome).subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
        
      }
    );
  }
  pesquisar(){
    this.produtoService.consultar(this.produto.nome).subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
        
      }
    );   
  }

  incluir(){    
    this.router.navigate(['/produto/incluir']);
  }

  alterar(){    
    this.router.navigate(['/produto/alterar/'+this.selecionado.nome]);
  }

  remover(){

    this. produtoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;    
  }



}
