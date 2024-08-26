import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutPolicyComponent } from './yout-policy.component';

describe('YoutPolicyComponent', () => {
  let component: YoutPolicyComponent;
  let fixture: ComponentFixture<YoutPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutPolicyComponent]
    });
    fixture = TestBed.createComponent(YoutPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
