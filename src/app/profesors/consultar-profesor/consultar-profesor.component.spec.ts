import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarProfesorComponent } from './consultar-profesor.component';

describe('ConsultarProfesorComponent', () => {
  let component: ConsultarProfesorComponent;
  let fixture: ComponentFixture<ConsultarProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarProfesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
