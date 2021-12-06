import { Component, OnInit } from '@angular/core';
import { MysqlrequestsService } from 'src/app/appservices/mysqlrequests.service';

@Component({
  selector: 'app-databaseedits',
  templateUrl: './databaseedits.component.html',
  styleUrls: ['./databaseedits.component.css']
})
export class DatabaseeditsComponent implements OnInit {
countries:any;
  constructor(private mysqlrequestservice:MysqlrequestsService) { }

 getcountries(){  
   this.mysqlrequestservice.getcountries()
    .subscribe((response:any) =>{
      console.log('countries',response);
    this.countries=response;
  });
  }
  ngOnInit(): void {
  }

}
