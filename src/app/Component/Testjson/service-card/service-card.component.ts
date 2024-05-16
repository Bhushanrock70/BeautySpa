import { Component, OnInit } from '@angular/core';
import { ServiceCardService } from '../service-card.service';
@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {
  servicecard: any[] = [];

  constructor(private serviceCardService: ServiceCardService) {}
  

  ngOnInit(): void {
  }
}
