import { Component, OnInit } from '@angular/core';
import { MysqlrequestsService } from 'src/app/appservices/mysqlrequests.service';

@Component({
  selector: 'app-clickshow',
  templateUrl: './clickshow.component.html',
  styleUrls: ['./clickshow.component.css']
})
export class ClickshowComponent implements OnInit {
  //@Input () view = '';
  approute='click';
  nextonclick=1;
  hovertext='hide';
  clickroute='';
    clickitem:any;

     constructor(private mysqlrequestservice:MysqlrequestsService ) { 
     
     }
  gonext(){
    this.nextonclick=this.nextonclick + 1;
    console.log(this.nextonclick)
  }
  restart(){
    this.nextonclick=1;
  }
    ngOnInit(): void {
    
    //  this.mysqlrequestservice.getclickshow()
    //  .subscribe((response:any) =>{
    //    console.log(response);
    //    this.clickitem=response;
   // });
    }
  
  }
