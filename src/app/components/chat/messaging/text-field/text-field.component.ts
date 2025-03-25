import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'wetalk-text-field',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent {
  public sendMessage(e: SubmitEvent): void {
    e.preventDefault();
  }
}
