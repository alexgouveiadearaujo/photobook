import { ActivatedRoute } from '@angular/router';
import { IPhotos } from './../iphoto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos!: IPhotos;

  constructor(
    // private userService: UserService,
    // private photographsService: PhotographsService
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      this.photos = this.activatedRoute.snapshot.data['photos']
    })
  }
}
