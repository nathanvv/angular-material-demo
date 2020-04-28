import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFilterSelectorComponent } from './person-filter-selector.component';

describe('PersonFilterSelectorComponent', () => {
  let component: PersonFilterSelectorComponent;
  let fixture: ComponentFixture<PersonFilterSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFilterSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFilterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
