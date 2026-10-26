import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  public langService = inject(LanguageService);
}