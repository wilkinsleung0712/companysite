import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bfd-photo-table',
  templateUrl: './photo-table.component.html',
  styleUrls: ['./photo-table.component.css']
})
export class PhotoTableComponent implements OnInit {

  @Input() photos;
  
  constructor() { }

  ngOnInit() {
  }

}
