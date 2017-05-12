import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'bfd-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css'],
  providers:[PhotoService]
})
export class PhotoDetailComponent implements OnInit {

  photoId = this.activeRoute.snapshot.params['id'];
  photo:any;
  constructor(private router:Router,
              private activeRoute:ActivatedRoute,
              private photoService:PhotoService,
              private location:Location) { }

  ngOnInit() {
    console.log(this.photoId);
    this.photoService.getPhoto(this.photoId).subscribe(photo=>{
      this.photo = photo;
    })
  }

  private backButton() {
    this.location.back();
  }

}
