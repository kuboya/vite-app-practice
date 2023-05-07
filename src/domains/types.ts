import { type AREA_CODE } from './constants';

export interface IAreaCode {
  id: (typeof AREA_CODE)[number];
  name: string;
  color: string;
}

export interface IUser {
  id: number;
  name: string;
  areaId: (typeof AREA_CODE)[number];
  race: string;
  class: string;
  level: number;
}
