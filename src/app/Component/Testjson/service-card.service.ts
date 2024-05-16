import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceCardService {
  ServiceCardServiceone() {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }
  getServiceCards() {
    return this.http.get('../../assets/Data.json');
  } 
  getServiceCardone(){
    return this.http.get('../../assets/Dataone.json');
  }
}
