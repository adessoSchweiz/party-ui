import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRouteComponent } from './request-route.component';

describe('RequestRouteComponent', () => {
  let component: RequestRouteComponent;
  let fixture: ComponentFixture<RequestRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
