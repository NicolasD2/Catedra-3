import { Component, OnInit } from '@angular/core';
import { PosthomeService } from '../../service/posthome.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ListPostComponent implements OnInit {
  posts: any[] = [];

  constructor(private postHomeService: PosthomeService) {}

  ngOnInit() {
    this.postHomeService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}
