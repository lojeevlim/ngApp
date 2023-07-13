import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LinkService } from 'src/app/core/services/link/link.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public items: MenuItem[] = [];
  private subscription: Subscription;
  public visible: boolean = false
  public isLogin: boolean = true
  constructor(
    private route: Router,
    private linkService: LinkService
  ) {
    this.linkService.setLink(this.route.url);
    this.subscription = this.linkService.getLinks().subscribe(data =>{
      this.items = data
    })
  }

  public toggle(){
    // console.log(event)
    this.visible = !this.visible;
  }

  ngOnInit():void {
  }
  ngOnDestroy(){
  this.subscription.unsubscribe()
  this.subscription.closed =true
  }
}
