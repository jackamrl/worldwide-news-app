import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModalComponent } from './new-modal.component';

describe('NewModalComponent', () => {
  let component: NewModalComponent;
  let fixture: ComponentFixture<NewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
