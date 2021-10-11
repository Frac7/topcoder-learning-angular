import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css']
})
export class NavbarHeaderComponent implements OnInit {
  title: string = 'Topcoder Angular Level 1'

  constructor() { }

  ngOnInit(): void {
  }

}
