import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  toggle: boolean = true;
  drLives: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleClick() {
    this.toggle = !this.toggle;
  }
  drLivesToggle() {
    this.drLives = !this.drLives;
  }
}
