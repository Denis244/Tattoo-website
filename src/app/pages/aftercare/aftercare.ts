import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-aftercare',
  imports: [],
  templateUrl: './aftercare.html',
  styleUrl: './aftercare.scss',
})
export class Aftercare {
  public langService = inject(LanguageService);
  
  // 'tattoo' or 'piercing'
  activeTab = signal<'tattoo' | 'piercing'>('tattoo');
}