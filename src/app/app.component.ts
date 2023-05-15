import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'SistemaVotacion';
  voterInfo: [number, string, boolean] = [0, '', false];
  // @ViewChild(StudentsTableComponent) studentsTable:  StudentsTableComponent | undefined = undefined;
  constructor() {}

  // ngAfterViewInit(): void {
  //     console.log(this.studentsTable?.canVote);
  // }
  receiveVoterInfo($event: [number, string, boolean]): void {
    // console.log($event);
    this.voterInfo = $event;
  }

  /*disableAllButtons(): void {
    console.log("ESTAMOS EN APP COMPONENT YA PODEMOS DESHABILITAR TODOS LOS BOTONES");
    // this.voteCards.forEach(voteCard => voteCard.isEnabled = false);
  }*/
}
