import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aftercare } from './aftercare';

describe('Aftercare', () => {
  let component: Aftercare;
  let fixture: ComponentFixture<Aftercare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aftercare],
    }).compileComponents();

    fixture = TestBed.createComponent(Aftercare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
