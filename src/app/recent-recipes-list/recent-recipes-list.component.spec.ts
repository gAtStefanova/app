import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentRecipesListComponent } from './recent-recipes-list.component';

describe('RecentRecipesListComponent', () => {
  let component: RecentRecipesListComponent;
  let fixture: ComponentFixture<RecentRecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentRecipesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
