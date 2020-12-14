import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellArticleComponent } from './sell-article.component';

describe('SellArticleComponent', () => {
  let component: SellArticleComponent;
  let fixture: ComponentFixture<SellArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
