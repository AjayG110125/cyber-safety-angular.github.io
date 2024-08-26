import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderconstractionComponent } from './underconstraction.component';

describe('UnderconstractionComponent', () => {
  let component: UnderconstractionComponent;
  let fixture: ComponentFixture<UnderconstractionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderconstractionComponent]
    });
    fixture = TestBed.createComponent(UnderconstractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
