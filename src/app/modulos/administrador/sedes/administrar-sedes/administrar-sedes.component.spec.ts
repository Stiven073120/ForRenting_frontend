import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarSedesComponent } from './administrar-sedes.component';

describe('AdministrarSedesComponent', () => {
  let component: AdministrarSedesComponent;
  let fixture: ComponentFixture<AdministrarSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarSedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
