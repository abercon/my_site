import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNavFilterComponent } from './feed-nav-filter.component';

describe('FeedNavFilterComponent', () => {
  let component: FeedNavFilterComponent;
  let fixture: ComponentFixture<FeedNavFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedNavFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedNavFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
