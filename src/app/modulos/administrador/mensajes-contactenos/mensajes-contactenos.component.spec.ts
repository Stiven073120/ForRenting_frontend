import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesContactenosComponent } from './mensajes-contactenos.component';

describe('MensajesContactenosComponent', () => {
  let component: MensajesContactenosComponent;
  let fixture: ComponentFixture<MensajesContactenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesContactenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesContactenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
