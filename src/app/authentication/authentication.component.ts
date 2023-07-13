import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from 'src/app/core/services/link/link.service'
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(
   private route: Router,
    private linkService: LinkService
  ){
    
  }

  ngOnInit(): void {
    // this.linkService.setLink(this.route.url);
  }

}
