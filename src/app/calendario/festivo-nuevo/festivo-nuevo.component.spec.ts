import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoNuevoComponent } from './festivo-nuevo.component';

describe('FestivoNuevoComponent', () => {
  let component: FestivoNuevoComponent;
  let fixture: ComponentFixture<FestivoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
