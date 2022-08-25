import { IPhotos } from './../iphoto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-photos',
  templateUrl: './grid-photos.component.html',
  styleUrls: ['./grid-photos.component.css']
})
export class GridPhotosComponent implements OnInit {
  @Input() photos !: IPhotos
  constructor() { }

  ngOnInit(): void {
  }

}
