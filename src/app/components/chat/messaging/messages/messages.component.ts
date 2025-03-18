import { Component, signal } from '@angular/core';
import { MessageItemComponent } from './message-item/message-item.component';

@Component({
  selector: 'wetalk-messages',
  imports: [MessageItemComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  public messages = signal([
    {
      id: 1,
      message:
        "Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...\"",
      outgoing: false,
      date: new Date().getTime(),
    },
    {
      id: 2,
      message:
        "Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...\"",
      outgoing: true,
      date: new Date().getTime(),
    },
    {
      id: 3,
      message:
        "Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...\"",
      outgoing: false,
      date: new Date().getTime(),
    },
    {
      id: 4,
      message:
        "Hey! 🍕 Don't forget our pizza night at your place this Saturday. I'm bringing my famous veggie pizza...\"",
      outgoing: true,
      date: new Date().getTime(),
    },
  ]);
}
