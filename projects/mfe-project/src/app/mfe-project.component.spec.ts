import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { mfeProjectComponent } from './mfe-project.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        mfeProjectComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(mfeProjectComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mfe-project'`, () => {
    const fixture = TestBed.createComponent(mfeProjectComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mfe-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(mfeProjectComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mfe-project app is running!');
  });
});
