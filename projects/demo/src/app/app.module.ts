import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ObservationApiService } from 'anecdata-ngcore';
import { DataAnalysisModule } from 'projects/data-analysis/src/public-api';
import { StarterLibraryModule } from 'projects/starter-library/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnecdataCoreModule } from 'anecdata-ngcore';
@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    AnecdataCoreModule.forRoot({
      apiKey: 'blerg',
      baseUrl: 'https://www.anecdata.org',
      appName: 'data-analysis-demo',
      appVersion: '1.0.0',
    }),
    DataAnalysisModule,
    BrowserModule,
    AppRoutingModule,
    StarterLibraryModule,
  ],
  providers: [HttpClient, ObservationApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
