import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestpasswordauthComponent } from './restpasswordauth.component';

describe('RestpasswordauthComponent', () => {
  let component: RestpasswordauthComponent;
  let fixture: ComponentFixture<RestpasswordauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestpasswordauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestpasswordauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
