import { Component, OnInit } from '@angular/core';
import { ServiceCardService } from '../../Testjson/service-card.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicecard: any=[];
  servicecardone: any=[];
  constructor(private serviceCardService:ServiceCardService ) { }

  ngOnInit(): void {
    
    this.serviceCardService.getServiceCards().subscribe(data=>{
      this.servicecard=data;
    } 
  )
  this.serviceCardService.getServiceCardone().subscribe(data=>{
    this.servicecardone=data;
  })
  }
  
}
