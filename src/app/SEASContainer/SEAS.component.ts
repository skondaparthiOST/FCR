import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'


@Component(
{
    selector:'app-SEAS',
    templateUrl:'./SEAS.component.html',
    styleUrls:['./SEAS.component.css']

}
)
export class SEAScontainer {
    AFMs : string = 'AFM APP';
    FCRs : string = 'FCR APP';
    FTAs : string = 'FTA APP';
    constructor(private router:Router){}
    ngOnInit():void{}
    goBack() 
    {
        console.log('going to the next page....');
        this.router.navigate([''],{replaceUrl:true});
    }
}