import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../servico/produto.service';
import { Produto } from '../servico/produto';


@Component({
  selector: 'app-produto-manter',
  templateUrl: './produto-manter.component.html',
  styleUrls: ['./produto-manter.component.scss']
})
export class ProdutoManterComponent implements OnInit {
  nomeProduto: string = '';
  operacao: string = 'Incluir';

  produto: Produto = new Produto();


  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.nomeProduto = this.routeActivated.snapshot.params.id;
    if(this.nomeProduto != null){
      this.operacao = 'Alterar';
      this.produtoService.consultar(this.nomeProduto).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }
  }
  voltar(){
    this.router.navigate(['/produto']);
  }

  incluir(){
    this.produtoService.incluir(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);        
      }
    );
  }

  alterar(){
    this.produtoService.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);        
      }
    );
  }



}
