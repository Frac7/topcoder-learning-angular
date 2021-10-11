import { Component, OnInit } from '@angular/core';

import { Treasure } from '../treasure';
import { TREASURES } from '../mock-treasures';

@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.css']
})
export class TreasuresComponent implements OnInit {

  treasures: Treasure[] = TREASURES;
  selectedTreasure: Treasure | undefined;

  onSelectTreasure (treasure: Treasure): void {
    if (this.selectedTreasure?.id !== treasure.id) {
      this.selectedTreasure = treasure;
    } else {
      this.selectedTreasure = undefined;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
