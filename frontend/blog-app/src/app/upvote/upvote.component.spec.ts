import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvoteComponent } from './upvote.component';

describe('UpvoteComponent', () => {
  let component: UpvoteComponent;
  let fixture: ComponentFixture<UpvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpvoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
