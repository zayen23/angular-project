import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { SuggestionDetailsComponent } from './suggestion-details/suggestion-details.component';
import { SuggestionsListComponent } from './suggestions-list.component';


@NgModule({
  declarations: [
    SuggestionsComponent,
    SuggestionDetailsComponent,
    SuggestionsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }
