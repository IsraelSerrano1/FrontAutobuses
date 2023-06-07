import { Component } from '@angular/core';
import { Autobus } from '../_modelo/Autobus';
import { AutobusService } from '../autobus.service';

@Component({
  selector: 'app-mostrar-autobuses',
  templateUrl: './mostrar-autobuses.component.html',
  styleUrls: ['./mostrar-autobuses.component.css']
})
export class MostrarAutobusesComponent {
  autobuses:Autobus[]=[];
  
  constructor(private sAutobus:AutobusService){

  }
  
  ngOnInit():void{
    this.sAutobus.listar().subscribe(datos => this.autobuses=datos);
  }

}
