import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFavoriteComponent } from './app-favorite.component';

describe('AppFavoriteComponent', () => {
  let component: AppFavoriteComponent;
  let fixture: ComponentFixture<AppFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
