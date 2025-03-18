import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessagingComponent } from './messaging/messaging.component';

@Component({
  selector: 'wetalk-chat',
  imports: [SidebarComponent, MessagingComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {}
