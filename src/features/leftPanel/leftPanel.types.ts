export type LeftPanelState = {
  activeArea: ActiveAreaState | null;
  activeHouse?: any;
};

export interface ActiveAreaState {
  area_id: number;
  name: string;
  [key: string]: string | number;
}
