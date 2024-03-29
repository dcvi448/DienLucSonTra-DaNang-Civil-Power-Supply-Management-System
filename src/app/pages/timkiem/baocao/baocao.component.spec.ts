import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaocaoComponent } from './baocao.component';

describe('BaoaoComponent', () => {
  let component: BaocaoComponent;
  let fixture: ComponentFixture<BaocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
