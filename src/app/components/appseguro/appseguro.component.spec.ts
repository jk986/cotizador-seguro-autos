import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppseguroComponent } from './appseguro.component';

describe('AppseguroComponent', () => {
  let component: AppseguroComponent;
  let fixture: ComponentFixture<AppseguroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppseguroComponent]
    });
    fixture = TestBed.createComponent(AppseguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
