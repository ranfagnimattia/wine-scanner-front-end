import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WineresultPage } from './wineresult.page';

describe('WineresultPage', () => {
  let component: WineresultPage;
  let fixture: ComponentFixture<WineresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WineresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
