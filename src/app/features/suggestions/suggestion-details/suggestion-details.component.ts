import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion: Suggestion | undefined;
  
  // Same data as in SuggestionsListComponent - ideally this should be in a service
  private suggestions: Suggestion[] = [
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const suggestionId = +id;
      this.suggestion = this.suggestions.find(s => s.id === suggestionId);
    }
  }

  getStatusLabel(status: string): string {
    if (status === 'acceptee') return 'ACCEPTÉE';
    if (status === 'refusee') return 'REFUSÉE';
    return 'EN ATTENTE';
  }

  getStatusClass(status: string): string {
    if (status === 'acceptee') return 'suggestion-details__badge--accepted';
    if (status === 'refusee') return 'suggestion-details__badge--refused';
    return 'suggestion-details__badge--pending';
  }
}
