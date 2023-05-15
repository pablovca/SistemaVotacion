import { Component, OnInit, OnChanges, Input, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { Party} from '../../services/Party';
import { VoteCardComponent } from '../vote-card/vote-card.component';

@Component({
  selector: 'vote-cards-container',
  templateUrl: './vote-cards-container.component.html',
  styleUrls: ['./vote-cards-container.component.css']
})

export class VoteCardsContainerComponent implements OnInit, OnChanges {

  public parties: Party[] = [];
  public canVote: boolean = false;

  @Input() voterInfo: [number, string, boolean] = [0, '', false];
  @ViewChildren(VoteCardComponent) voteCards: QueryList<VoteCardComponent> = new QueryList();

  constructor(private backendConnection: BackendConnectionService) {}

  ngOnInit(): void {
    this.backendConnection.getParties().subscribe((parties: Party[]) => {
      this.parties = parties;
      // console.log(this.parties);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //[this.voterInfo].currentValue
    // console.log(changes['voterInfo'].currentValue);
    this.canVote = changes['voterInfo'].currentValue[2];
  }

  /*ngAfterViewInit(): void {
      //console.log(this.studentsTable?.canVote);
      console.log("AFTER VIEW INIT");
      this.voteCards.forEach(voteCard => voteCard.isEnabled = false);
    }*/
    
  disableAllButtons(): void {
   // console.log("YA PODEMOS DESHABILITAR TODOS LOS BOTONES");
    this.voteCards.forEach(voteCard => voteCard.isEnabled = false);
  }
  

}
