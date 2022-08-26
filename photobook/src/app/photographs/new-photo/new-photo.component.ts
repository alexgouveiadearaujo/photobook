import { Router } from '@angular/router';
import { PhotographsService } from './../photographs.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.component.html',
  styleUrls: ['./new-photo.component.css'],
})
export class NewPhotoComponent implements OnInit {
  formPhoto!: FormGroup;
  file!: File;
  preview!: string;
  percentageCompleted = 0;

  constructor(
    private photographsService: PhotographsService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formPhoto = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const allowComments = this.formPhoto.get('allowComments')?.value ?? false;
    const description = this.formPhoto.get('description')?.value ?? '';
    this.photographsService
      .upload(description, allowComments, this.file)
      .pipe(finalize(() => this.router.navigate(['photographs'])))
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentageCompleted = Math.round(100 * (event.loaded / total));
          }
        },
        (err) => console.log(err)
      );
  }

  saveFile(file: any): void {
    const [filee] = file?.files;
    this.file = filee;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(filee);
  }
}
