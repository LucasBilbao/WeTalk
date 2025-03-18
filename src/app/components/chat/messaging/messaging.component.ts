import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MessagesComponent } from './messages/messages.component';
import { TextFieldComponent } from './text-field/text-field.component';

@Component({
  selector: 'wetalk-messaging',
  imports: [HeaderComponent, MessagesComponent, TextFieldComponent],
  templateUrl: './messaging.component.html',
  styleUrl: './messaging.component.scss',
})
export class MessagingComponent {}
