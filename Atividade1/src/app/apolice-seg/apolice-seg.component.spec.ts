import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceSegComponent } from './apolice-seg.component';

describe('ApoliceSegComponent', () => {
  let component: ApoliceSegComponent;
  let fixture: ComponentFixture<ApoliceSegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApoliceSegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoliceSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
