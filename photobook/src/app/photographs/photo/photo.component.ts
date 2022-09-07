import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiURL;

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  private originalUrl = '';
  @Input() description = '';
  @Input() set url(url: string) {
    url.startsWith('data')
      ? (this.originalUrl = url)
      : (this.originalUrl = `${API}/imgs/${url}`);
  }
  get url(): string {
    return this.originalUrl;
  }

  constructor() {}

  ngOnInit(): void {}
}
