import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatComponent } from './navigat.component';

describe('NavigatComponent', () => {
  let component: NavigatComponent;
  let fixture: ComponentFixture<NavigatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
