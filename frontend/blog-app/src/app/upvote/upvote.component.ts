import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() id: number
  @Input() upvotes: number
  @Input() upvoteCount: number
  @Output() vote = new EventEmitter<number>()

  upvote() {
    this.vote.emit(this.id)
  }

}
