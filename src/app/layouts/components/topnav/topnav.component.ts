import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LinkService } from 'src/app/core/services/link/link.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Output() Load: EventEmitter<any> = new EventEmitter();
  @Input() ITEMS: any = []
  
  @Input() isActice: boolean = true

  items: MenuItem[] = [];
  activeItem: MenuItem[] = [];
  search: string = ""
  private subscription: Subscription;
  constructor
  (
    private route: Router,
    private linkService: LinkService
  ) 
  {
    this.linkService.setLink(this.route.url);
    this.subscription = this.linkService.getLinks().subscribe(data =>{
      this.items = data
      console.log(this.items)
    })

  }

  public save(){
    console.log("click")
  }
  public onActiveItemChange(event:any){
    console.log(event)
  }
  
  ngOnInit():void {
  //   this.items = [
  //     {
  //         label: 'Update',
  //         icon: 'pi pi-refresh',
 
  //     },
  //     {
  //         label: 'Delete',
  //         icon: 'pi pi-times',
  
  //     },
  //     { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
  //     { separator: true },
  //     { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] }
  // ];

    console.log(this.subscription)
    this.activeItem.push(this.items[0]);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
    this.subscription.closed = true
    }
}
