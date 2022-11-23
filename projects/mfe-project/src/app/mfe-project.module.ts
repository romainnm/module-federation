import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { mfeProjectRoutingModule } from './mfe-project-routing.module';
import { mfeProjectComponent } from './mfe-project.component';

@NgModule({
  declarations: [
    mfeProjectComponent
  ],
  imports: [
    BrowserModule,
    mfeProjectRoutingModule
  ],
  providers: [],
  bootstrap: [mfeProjectComponent]
})
export class mfeProjectModule { }
