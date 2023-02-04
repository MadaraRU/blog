import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-downvote',
  templateUrl: './downvote.component.html',
  styleUrls: ['./downvote.component.css']
})
export class DownvoteComponent {
  @Input() id: number
  @Input() downvotes: number
  @Output() vote = new EventEmitter<number>()

  downvote() {
    this.vote.emit(this.id)
  }
}
