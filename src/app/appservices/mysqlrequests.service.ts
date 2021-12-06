import { Injectable } from '@angular/core';
import { MysqlService } from './mysql.service';

@Injectable({
  providedIn: 'root'
})
export class MysqlrequestsService {

  constructor(private mysqlservice:MysqlService) { }

 // createportaluserrecord(payload:Object){
  //  return this.mysqlservice.post('smccreate/portaluserrecord',payload)
   // }
   // getcountries(p:string){
   //   return this.mysqlservice.get(`portal/${p}`);
   // }

   //// countries ////////////////
    getcountries(){
      return this.mysqlservice.get('countries');
    }
    

}
