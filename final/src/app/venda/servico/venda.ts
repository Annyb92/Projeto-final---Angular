import { VentaItem } from './ventaitem';
import { Cliente } from 'src/app/cliente/servico/cliente';

export class Venda{
    
    codigo: string;
    data: Date;
    cliente:Cliente;
    listaVentaItem: VentaItem[] = [];



}