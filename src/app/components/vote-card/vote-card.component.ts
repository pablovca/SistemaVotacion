import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Party } from '../../services/Party';
import { Vote } from '../../services/Vote';
import { BackendConnectionService } from '../../services/backend-connection.service';


@Component({
  selector: 'vote-card',
  templateUrl: './vote-card.component.html',
  styleUrls: ['./vote-card.component.css']
})
export class VoteCardComponent {
  @Input() party: Party = {} as Party;
  @Input() isEnabled: boolean = false;
  @Input() voterInfo: [number, string, boolean] = [0, '', false];
  @Output() voted = new EventEmitter();

  baseImgURL: string = '../../../assets/'; 
  UserIcon: string =  this.baseImgURL + '/user-icon.png';

  constructor(private backendConnection: BackendConnectionService) {}

  onVoteButtonClick(/*callback: (res: any) =>  void*/) {
    // alert("click en vote " + this.party.party_name)
/*

(response) => {
      console.log("YA EL SERVIDOR NOS RESPONDIA");
      console.log(response);
      //this.isEnabled = false;
    }
*/
    // console.log(this.voterInfo[0], this.voterInfo[1], this.party.id);
    let vote: Vote = new Vote(this.voterInfo[0], this.voterInfo[1], this.party.id);
    this.backendConnection.postVote(vote).subscribe((response) => {
      console.log("YA EL SERVIDOR NOS RESPONDIO");
      console.log(response);
      //this.isEnabled = false;
      this.voted.emit();
    });
  }
}
