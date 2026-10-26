import { Component, inject, signal } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  public langService = inject(LanguageService);

  // Holds the index of the currently open question.
  // null means all questions are closed.
  openFaqIndex = signal<number | null>(0); // 0 means the first question is open by default

  toggleFaq(index: number) {
    // If the clicked question is already open, close it (set to null).
    // Otherwise, open the clicked one.
    if (this.openFaqIndex() === index) {
      this.openFaqIndex.set(null);
    } else {
      this.openFaqIndex.set(index);
    }
  }
}