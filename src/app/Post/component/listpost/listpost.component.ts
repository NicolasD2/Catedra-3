import { Component, OnInit } from '@angular/core';
import { PosthomeService } from '../../service/posthome.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]
})
export class ListPostComponent implements OnInit {
  posts: any[] = [];
  postForm: FormGroup;
  constructor(private postHomeService: PosthomeService,private fb: FormBuilder) {

    this.postForm = this.fb.group({
      title: [''],
      content: ['']
    });
  }

  ngOnInit() {
    this.postHomeService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
