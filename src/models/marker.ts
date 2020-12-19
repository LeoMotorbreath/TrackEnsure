import {IPosition} from "./position";

export interface IMarker  {
  position: IPosition;
  map: any;
}

export class Marker implements IMarker {
  position: IPosition;
  map: any;
  constructor(position: IPosition, map: any) {
    this.map = map;
    this.position = position;
  }
}
