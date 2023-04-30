import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPageComponent } from './hero-page.component';

describe('HeroPageComponent', () => {
  let component: HeroPageComponent;
  let fixture: ComponentFixture<HeroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
