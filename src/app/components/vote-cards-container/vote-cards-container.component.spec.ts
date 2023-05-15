import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCardsContainerComponent } from './vote-cards-container.component';

describe('VoteCardsContainerComponent', () => {
  let component: VoteCardsContainerComponent;
  let fixture: ComponentFixture<VoteCardsContainerComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteCardsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
