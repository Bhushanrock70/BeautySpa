import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-hair-care',
  templateUrl: './view-all-hair-care.component.html',
  styleUrls: ['./view-all-hair-care.component.css']
})
export class ViewAllHairCareComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


hairherprice(){
  this.router.navigate(['/hairherprice']);
}
}