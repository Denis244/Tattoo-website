export interface Tattoo {
  id: number;
  title: string;
  category: 'blackwork' | 'fineline' | 'color';
  imageUrl: string;
}

export const PORTFOLIO_DATA: Tattoo[] = [
  // Using placeholder images from Unsplash for now
  { id: 1, title: 'Dark Rose', category: 'blackwork', imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Botanical', category: 'fineline', imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Traditional Eagle', category: 'color', imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Ornamental', category: 'blackwork', imageUrl: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Minimalist Snake', category: 'fineline', imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Neo-Trad Skull', category: 'color', imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop' },
];