import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownvoteComponent } from './downvote.component';

describe('DownvoteComponent', () => {
  let component: DownvoteComponent;
  let fixture: ComponentFixture<DownvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownvoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
