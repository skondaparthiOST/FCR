import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SEAScontainer} from './SEASContainer/SEAS.component';
import { RouterModule,Routes } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title:string = 'AngularSEAS';
   tools:string = 'DEVSECOPS'
   nos : number = 0
   constructor(private router:Router){}
   ngOnInit():void{}
   nextPage() {
    
    console.log('going to the next page....');
this.router.navigate(['/SEAS'],{replaceUrl:true});
this.nos= this.nos+1;

    
   }
}
