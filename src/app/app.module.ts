import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapSearchComponent } from './map-search/map-search.component';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MapSearchComponent
  ],
  imports: [
    BrowserModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('339eb2e9e8034f8bbdfbfab830bd1cba')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
