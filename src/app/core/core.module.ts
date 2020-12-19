import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from "./components/map/map.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {AssetsService} from "./services/assets.service";



@NgModule({
  declarations: [MapComponent, SidebarComponent],
  exports: [
    MapComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AssetsService
  ]
})
export class CoreModule { }
