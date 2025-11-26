import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-liste-suggestions',
  templateUrl: './liste-suggestions.component.html',
  styleUrls: ['./liste-suggestions.component.css'],
})
export class ListeSuggestionsComponent {
  searchTerm = '';
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description:
        "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      likes: 12,
    },
    {
      id: 2,
      title: "Améliorer le système de réservation",
      description:
        "Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.",
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      likes: 3,
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description:
        "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      likes: 5,
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description:
        "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      likes: 0,
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description:
        "Organisation d'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.",
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      likes: 4,
    },
  ];

  favorites: Suggestion[] = [];

  get filteredSuggestions(): Suggestion[] {
    const term = this.searchTerm.toLowerCase();
    return this.suggestions.filter(
      (s) =>
        s.title.toLowerCase().includes(term) ||
        s.category.toLowerCase().includes(term)
    );
  }

  canShowActions(suggestion: Suggestion): boolean {
    return suggestion.status !== 'refusee';
  }

  like(suggestion: Suggestion): void {
    if (!this.canShowActions(suggestion)) {
      return;
    }
    suggestion.likes = (suggestion.likes ?? 0) + 1;
  }

  addToFavorites(suggestion: Suggestion): void {
    if (!this.canShowActions(suggestion)) {
      return;
    }
    const exists = this.favorites.some((fav) => fav.id === suggestion.id);
    if (!exists) {
      this.favorites.push(suggestion);
    }
  }
}



