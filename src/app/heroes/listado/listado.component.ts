import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string='';
  heroe: boolean = false;

  borrarHeroe(): void{
    this.heroe = true;
    this.heroeBorrado  = this.heroes.shift() || '';
    if(this.heroes.length==0){
      this.heroe = false;
    }
  }
}
