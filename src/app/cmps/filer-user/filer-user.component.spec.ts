import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerUserComponent } from './filer-user.component';

describe('FilerUserComponent', () => {
  let component: FilerUserComponent;
  let fixture: ComponentFixture<FilerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
