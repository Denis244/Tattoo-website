import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  public langService = inject(LanguageService);
}