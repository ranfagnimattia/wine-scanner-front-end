import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScannedPage } from './scanned.page';

describe('ScannedPage', () => {
  let component: ScannedPage;
  let fixture: ComponentFixture<ScannedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScannedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
