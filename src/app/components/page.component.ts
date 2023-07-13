import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LinkService } from 'src/app/core/services/link/link.service'
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements  OnInit {
  constructor(
    private route: Router,
    private linkService: LinkService
    ) { 
      this.linkService.setLink(this.route.url);
    }

  ngOnInit():void{
  
  }
}
