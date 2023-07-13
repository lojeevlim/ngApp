import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dashboardLinks, loginLinks } from 'src/app/links/link-list';
@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private linkData= new BehaviorSubject<any>([]);
  constructor() {
    this.getLinks()

   }

  public async setLink(route: string) {
    let link:any = []
    switch (route) {
      case '/':
      case '/authentication/login':
        link = loginLinks;
        break;
      case '/page/dashboard':
        link = dashboardLinks;
        break;
      default:
        link = [];
        break;
    }
     this.linkData.next(link);
  }
  
  getLinks() {
    return this.linkData.asObservable();
  }
  
}