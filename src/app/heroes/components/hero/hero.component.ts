import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


    public name : string = 'jairo'
    public age : number = 35

    get capitalizedName(): string {
      return this.name.toUpperCase()
    }

    getHeroDescription():string{

      return `${this.name} - ${this.age}`
    }

    changeHero():void{

    this.name='Jose'

    }

    changeAge():void{
      this.age=36

    }


}
