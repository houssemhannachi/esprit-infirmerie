import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedecineComponent } from './add-medecine.component';

describe('AddMedecineComponent', () => {
  let component: AddMedecineComponent;
  let fixture: ComponentFixture<AddMedecineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMedecineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedecineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
