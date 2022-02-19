import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Map, Marker } from 'maplibre-gl';
import type SupportedLanguage from '@geoapify/geocoder-autocomplete';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.css']
})

export class MapSearchComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  readonly myAPIKey = '339eb2e9e8034f8bbdfbfab830bd1cba';
  readonly mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';
  readonly initialState = {
    lng: 11,
    lat: 49,
    zoom: 4
  };

  public lang: SupportedLanguage.SupportedLanguage;
  public placeholder: string;
  public marker;
  public map: Map;

  constructor( ) {}

  ngOnInit() {
    this.lang = "ru";
    this.placeholder = "Введите адрес";
  }

  ngAfterViewInit() {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${this.mapStyle}?apiKey=${this.myAPIKey}`,
      center: [this.initialState.lng, this.initialState.lat],
      zoom: this.initialState.zoom
    });
  }

  placeSelected($event: any) {
    let lon = $event.properties.lon;
    let lat = $event.properties.lat;
    this.map.flyTo({center: [lon, lat], zoom: 5});
    if (!this.marker){
      this.marker = new Marker();
    }
    this.marker.remove().setLngLat([lon, lat]).addTo(this.map);
  }

  // closeButtonEvent() {
  //   if (this.marker){
  //       this.marker.remove();
  //     }
  // }
}


