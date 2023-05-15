import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { Student } from '../../services/Student';
import { Section } from '../../services/Section';

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  public current_student: Student | undefined;
  public selected_student: Student | undefined;
  public students: Student[] = [];
  public sections: Section[] = [];
  public studentsHeaderColspan: number = 0;
  public canVote: boolean = false;
  public voterInfo: [number, string, boolean] = [0, '', false];

  @Output() canVoteEmitter = new EventEmitter<[number, string, boolean]>();
  constructor(private backendConnection: BackendConnectionService) {}

  ngOnInit(): void {
    this.backendConnection.getSections().subscribe((sections: Section[]) => {
      this.sections = sections;
      this.studentsHeaderColspan = this.getMaxSectionLength();
    });
    this.backendConnection.getStudents().subscribe((students: Student[]) => {
      this.students = students;
    });
  }

  getStudentsArray(n: number): Array<number> {
    return Array.from({ length: n }, (element: number, index: number) => { return index + 1 });
  }

  getMaxSectionLength(): number {
    let maxSection: Section = {} as Section;
    maxSection = this.sections.reduce<Section>((accumulator: Section, currentValue: Section) => {
      if (currentValue.quantity > accumulator.quantity) {
        return currentValue;
      }
      return accumulator;
    }, {id: '', quantity: 0} as Section);
    return maxSection.quantity;
  }

  getStudentById(student_id: number, section: string): Student | undefined {
    this.current_student = this.students.find((value: Student) => {
      return (value.id == student_id && value.section == section);
    });
    return this.current_student;
  }

  getIfStudentVotedById(student_id: number, section: string): boolean | undefined {
    let student: Student | undefined;
    student = this.getStudentById(student_id, section);
    return student?.already_voted;
  }

  onSelectedStudent(student_id: number, section: string): void {
    this.selected_student = this.getStudentById(student_id, section); 
  }
  
  onStudentSelected(event: Event): void {
    let input_element: HTMLInputElement | null = event.target as HTMLInputElement;
    let voterJSON = JSON.parse(input_element?.value);
    this.canVote = true;
    this.voterInfo = [voterJSON.id, voterJSON.section, true];
    console.log(this.voterInfo);
    this.canVoteEmitter.emit(this.voterInfo);
  }

  changeStudentBackground(): void {
    console.log("YA VAMOS A CAMBIAR EL COLOR DEL BACKGROUND");
  }
}
