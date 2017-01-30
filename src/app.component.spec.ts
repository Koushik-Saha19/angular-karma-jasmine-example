import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', function () {
  let element: DebugElement;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement.query(By.css('h1'));
    });
  }));

  it('should create component', () => expect(component).toBeDefined());

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = element.nativeElement;
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });
});
