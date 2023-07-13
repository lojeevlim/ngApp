import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LinkService } from 'src/app/core/services/link/link.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  constructor(
    private route: Router,
    private location: Location,
    private linkService: LinkService
  ){}
  loading: boolean = false

  public login(){
    this.loading = true
    setTimeout(() => {

      
      this.loading = false
      this.route.navigate(['page'])
      
    }, 1000);

  }
  
  ngOnInit():void{

  }
}
