import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScormUploadComponent } from './scorm-upload.component';

describe('ScormUploadComponent', () => {
  let component: ScormUploadComponent;
  let fixture: ComponentFixture<ScormUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScormUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScormUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
