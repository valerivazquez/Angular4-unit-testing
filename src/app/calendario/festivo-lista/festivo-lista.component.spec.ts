import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoListaComponent } from './festivo-lista.component';

describe('FestivoListaComponent', () => {
  let component: FestivoListaComponent;
  let fixture: ComponentFixture<FestivoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
