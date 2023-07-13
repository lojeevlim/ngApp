import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() visible: boolean = false
  @Input() ITEMS: MenuItem[] = [];
  @Input() isLogin: boolean = true
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  
  constructor(){
    console.log("side")
  }


  // public Isvisible():void{
  //   this.visible = !this.visible;
  //   this.toggle.emit()
  // }
  
  ngOnInit(): void {
    
  }

}
