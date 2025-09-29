import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  imports: [ RouterModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'social';
}
