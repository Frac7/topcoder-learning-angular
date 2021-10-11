import { Component, OnInit } from '@angular/core';

import { Treasure } from '../treasure';
import { treasure } from '../mock-treasures';

@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.css']
})
export class TreasuresComponent implements OnInit {

  treasure: Treasure = treasure;

  constructor() { }

  ngOnInit(): void {
  }

}
