import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNavSearchComponent } from './feed-nav-search.component';

describe('FeedNavSearchComponent', () => {
  let component: FeedNavSearchComponent;
  let fixture: ComponentFixture<FeedNavSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedNavSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedNavSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
