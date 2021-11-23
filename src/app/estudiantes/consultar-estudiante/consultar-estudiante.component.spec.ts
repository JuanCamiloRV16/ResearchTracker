import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEstudianteComponent } from './consultar-estudiante.component';

describe('ConsultarEstudianteComponent', () => {
  let component: ConsultarEstudianteComponent;
  let fixture: ComponentFixture<ConsultarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
