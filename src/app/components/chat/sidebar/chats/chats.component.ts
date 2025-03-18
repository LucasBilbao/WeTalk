import { Component } from '@angular/core';
import { ChatItemComponent } from './chat-item/chat-item.component';

@Component({
  selector: 'wetalk-chats',
  imports: [ChatItemComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss',
})
export class ChatsComponent {}
