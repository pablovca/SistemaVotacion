import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteCardComponent } from './components/vote-card/vote-card.component';
import { VoteCardsContainerComponent } from './components/vote-cards-container/vote-cards-container.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VoteCardComponent,
    VoteCardsContainerComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
