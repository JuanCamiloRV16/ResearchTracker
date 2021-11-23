import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAvanceComponent } from './registrar-avance.component';

describe('RegistrarAvanceComponent', () => {
  let component: RegistrarAvanceComponent;
  let fixture: ComponentFixture<RegistrarAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
