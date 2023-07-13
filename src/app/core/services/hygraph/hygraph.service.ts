import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Apollo , gql} from 'apollo-angular';
@Injectable({
  providedIn: 'root'
})
export class HygraphService {

  constructor(
    private apollo: Apollo
  ) { }

  public async Query(query: string): Promise<Observable<any>> {
    return await this.apollo.query({
      query: gql`
        ${query}
      `,
    });
  }

  public async Mutation(query: string): Promise<Observable<any>> {
    return await this.apollo.query({
      query: gql`
        ${query}
      `,
    });
  }
}
