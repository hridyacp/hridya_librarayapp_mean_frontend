import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewauthorComponent } from './addnewauthor.component';

describe('AddnewauthorComponent', () => {
  let component: AddnewauthorComponent;
  let fixture: ComponentFixture<AddnewauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
