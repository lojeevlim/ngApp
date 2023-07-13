import { Component, OnInit } from '@angular/core';
import { HygraphService } from 'src/app/core/services/hygraph/hygraph.service';
import { getClient } from 'src/app/queries/clients';
import { Observable, concat, flatMap } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private hygraphService: HygraphService,
    // private activeLink: ActiveLink
    ){}

    public clients: any[] = [];
    public date: Date = new Date();
   public async getData(): Promise<void> {

      this.clients = await (await this.hygraphService.Query(getClient)).toPromise()
      .then((data) => Object.values(data.data).flatMap((d:any) => d))
      .catch(() => [])
    }
    
    ngOnInit(): void {
     this.getData() 

     console.log("dashboard")
    }
}
