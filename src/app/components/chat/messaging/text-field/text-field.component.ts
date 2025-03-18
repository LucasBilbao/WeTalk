import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'wetalk-text-field',
  imports: [MatIconModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent {
  public sendMessage(e: SubmitEvent): void {
    e.preventDefault();
  }
}
