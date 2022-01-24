import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular Workshop',
      description: 'Learn the fundamentals of Angular ',
      percentComplete: 26,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
