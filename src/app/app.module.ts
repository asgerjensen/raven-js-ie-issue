import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';

import * as Raven from 'raven-js';

Raven
.config('[somevalue]')
.install();

export class RavenErrorHandler implements ErrorHandler {
handleError(err: any): void {
  // Log to console
  console.log(err);
  // Log to sentry
  Raven.captureException(err);
}
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ErrorHandler, useClass: RavenErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
