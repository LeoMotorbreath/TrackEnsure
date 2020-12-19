import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IMarker, Marker} from "../../../models/marker";
import {Asset} from "../../../models/asset";

@Injectable()
export class AssetsService {

  constructor() { }

  /// used vars to check me right;
  Kiev = { position: {lat: 50.4501, lng: 30.5234}, id: 1, name: 'Kiev' } ;
  Jytomir = { position: {lat: 50.2547, lng: 28.6587}, id: 2, name: 'Jytomir' };
  BilaCerkva = { position: {lat: 49.7, lng:  30.1}, id: 3, name: 'Bila Cerkva'};
  private currentAsset: Asset | null = null;
  currentAsset$ = new BehaviorSubject(this.currentAsset);
  assets: Asset[] = [this.Kiev, this.Jytomir, this.BilaCerkva];

  public setCurrentAsset(assetId: number): void {
    this.currentAsset$.next(this.currentAsset = this.getAsset(assetId) || null);
  }

  // violates single responsibility principle
  public createAssetMarker(assetId: number, map: any): IMarker | null {
    const asset = this.getAsset(assetId);
    return asset? new Marker(asset.position, map) : null;
  }

  private getAsset(assetId: number): Asset | null {
    return this.assets.find(el => el.id === assetId) || null;
  }
}
