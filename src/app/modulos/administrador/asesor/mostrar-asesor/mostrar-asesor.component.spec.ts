import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAsesorComponent } from './mostrar-asesor.component';

describe('MostrarAsesorComponent', () => {
  let component: MostrarAsesorComponent;
  let fixture: ComponentFixture<MostrarAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAsesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
