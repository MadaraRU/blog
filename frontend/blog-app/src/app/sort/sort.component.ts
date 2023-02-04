import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SortPipe } from '../pipes/sort.pipe';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  @Input() blogs: any;
  @Output() sortedBlogs = new EventEmitter<any>();

  selectedSortOption = '';

  constructor(private sortPipe: SortPipe) { }

  sortBlogs() {
    this.sortedBlogs.emit(this.sortPipe.transform(this.blogs, this.selectedSortOption));
  }

}
