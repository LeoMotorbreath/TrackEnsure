import { Component, OnInit } from '@angular/core';
import {AssetsService} from "../../services/assets.service";
import {Asset} from "../../../../models/asset";

@Component({
  selector: 'Sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  assets: Asset[] = [];
  constructor(private assetService: AssetsService) {

  }

  ngOnInit(): void {
    this.assets = this.assetService.assets;
  }

  selectAsset(asset: Asset): void {
    this.assetService.setCurrentAsset(asset.id);
  }
}
