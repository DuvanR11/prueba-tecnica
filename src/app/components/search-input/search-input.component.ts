import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-input',
  template: `
    <app-input
      [type]="'text'"
      [placeholder]="'¿Qué quieres escuchar?'"
      [value]="value"
      (valueChange)="onInputChange($event)"
    ></app-input>
  `
})
export class SearchInputComponent implements OnInit {
  value: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      this.navigateToSearch(searchValue);
    });
  }

  onInputChange(value: string): void {
    this.value = value;
    this.searchSubject.next(this.value);
  }

  navigateToSearch(searchValue: string): void {
    const queryParams = { title: searchValue };
    this.router.navigate(['home/search'], { queryParams });
  }
}
