import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AssetsService} from "../../services/assets.service";
import {Asset} from "../../../../models/asset";
import {filter} from "rxjs/operators";
@Component({
  selector: 'C-Map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  map: any = null;
  gMapsRef: any;
  currentMarker: any = null;
  defaultMapOptions = {
    center: { lat: 50.4501, lng: 30.5234 },
    zoom: 8,
  };

  constructor(private assetsService: AssetsService) {
    // fast but wrong to inject
    // @ts-ignore
    this.gMapsRef = window.google.maps;
  }

  ngOnInit(): void {
    this.assetsService.currentAsset$.pipe(
      filter(el => !!el),
    ).subscribe(data => {
      // added ignore because ts compiler is not smart enough to realise that I have filtered the stream before
      // @ts-ignore
      this.placeMarker(data);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
  private placeMarker(asset: Asset): void {
    this.currentMarker?.setMap(null);
    const marker = new this.gMapsRef.Marker(this.assetsService.createAssetMarker(asset.id, this.map));
    this.currentMarker = marker;
    marker.setMap(marker.map);
  }

  private initMap(): void {
    this.map = new this.gMapsRef.Map(document.getElementById('map'), this.defaultMapOptions);
  }
}
