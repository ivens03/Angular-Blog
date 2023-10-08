import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuBarComponent } from './meu-bar.component';

describe('MeuBarComponent', () => {
  let component: MeuBarComponent;
  let fixture: ComponentFixture<MeuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
