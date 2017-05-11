import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'bfd-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers:[PhotoService]
})
export class PhotoListComponent implements OnInit {

  photos$: any;
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    // a way to use async pipe to display
    this.photos$ = this.photoService.getPhotoList();
    // this.photoService.getPhotoList().subscribe(
    //   photos => this.photos$ = photos);
  }

}
