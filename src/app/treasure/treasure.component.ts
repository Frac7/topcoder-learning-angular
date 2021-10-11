import { Component, OnInit, Input } from '@angular/core';
import { Treasure } from '../treasure';

@Component({
  selector: 'app-treasure',
  templateUrl: './treasure.component.html',
  styleUrls: ['./treasure.component.css']
})
export class TreasureComponent implements OnInit {

  // @ts-ignore
  @Input() treasure: Treasure;

  constructor() { }

  ngOnInit(): void {
  }

}
