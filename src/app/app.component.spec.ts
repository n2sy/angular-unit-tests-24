import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('Devrait retourner 0 si x est négatif', () => {
    const inst = new AppComponent();
    const res = inst.compute(-2);
    expect(res).toBe(0);
  })
 });