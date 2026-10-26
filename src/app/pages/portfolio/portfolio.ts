import { Component, inject, signal, computed } from '@angular/core';
import { LanguageService } from '../../services/language';
import { PORTFOLIO_DATA, Tattoo } from '../../services/portfolio-data';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  public langService = inject(LanguageService);

  // 1. Store all tattoos
  allTattoos: Tattoo[] = PORTFOLIO_DATA;

  // 2. Create a signal for the current filter. Default to 'all'.
  currentFilter = signal<string>('all');

  // 3. Create a computed signal that automatically filters the list
  // whenever 'currentFilter' changes.
  filteredTattoos = computed(() => {
    const filter = this.currentFilter();
    if (filter === 'all') {
      return this.allTattoos;
    }
    return this.allTattoos.filter(t => t.category === filter);
  });

  // 4. Method to change the filter
  setFilter(filter: string) {
    this.currentFilter.set(filter);
  }
}