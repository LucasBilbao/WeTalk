import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChatsComponent } from './chats/chats.component';

@Component({
  selector: 'wetalk-sidebar',
  imports: [MatIconModule, ChatsComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
