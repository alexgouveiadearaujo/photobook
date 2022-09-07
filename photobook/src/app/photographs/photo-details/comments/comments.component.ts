import { switchMap, tap } from 'rxjs/operators';
import { CommentsService } from './comments.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { IComments } from './icomments';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<IComments>;
  commentForm!: FormGroup;

  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder
  ) {
    console.log(this.comments$);
  }

  ngOnInit(): void {
    this.comments$ = this.commentsService.searchComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  toRecord(): void {
    const comment = this.commentForm.get('comment')?.value ?? '';
    this.comments$ = this.commentsService.addComment(this.id, comment).pipe(
      switchMap(() => this.commentsService.searchComment(this.id)),
      tap(() => {
        this.commentForm.reset();
      })
    );
  }
}
