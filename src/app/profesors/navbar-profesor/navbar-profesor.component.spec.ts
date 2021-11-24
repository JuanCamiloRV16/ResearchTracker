import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProfesorComponent } from './navbar-profesor.component';

describe('NavbarProfesorComponent', () => {
  let component: NavbarProfesorComponent;
  let fixture: ComponentFixture<NavbarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
