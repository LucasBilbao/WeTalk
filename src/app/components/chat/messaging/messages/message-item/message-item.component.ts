import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'wetalk-message-item',
  imports: [CommonModule],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.scss',
})
export class MessageItemComponent {
  public message = input.required<{
    id: number;
    message: string;
    outgoing: boolean;
    date: number;
  }>();
}
