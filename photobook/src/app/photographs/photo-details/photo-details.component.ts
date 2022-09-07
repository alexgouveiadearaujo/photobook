import { PhotographsService } from './../photographs.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../iphoto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  photoId!: number;
  photo$!: Observable<IPhoto>;

  constructor(
    private photographsService: PhotographsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.photoId = this.activatedRoute.snapshot.params.photoId;
    this.photo$ = this.photographsService.searchById(this.photoId);
  }

  like() {
    this.photographsService.likePhoto(this.photoId).subscribe((like) => {
      if (like) {
        this.photo$ = this.photographsService.searchById(this.photoId);
      }
    });
  }

  remove() {
    if (confirm('Deseja excluir foto ?')) {
      this.photographsService.deletePhoto(this.photoId).subscribe(
        () => {
          this.router.navigate(['/photographs/']);
        },
        (err) => console.log(`ERROR: ${err}`)
      );
    }
  }
}
