import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-user',
  templateUrl: './filer-user.component.html',
  styleUrls: ['./filer-user.component.scss']
})
export class FilerUserComponent implements OnInit {
  @Input() filterBy;
  filterByCopy = null;
  @Output() onFilter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.filterByCopy = { ...this.filterBy };
  }

  onInput(el){
    this.filterByCopy.term = el.target.value;
    this.onFilter.emit(this.filterByCopy);
  }

}
