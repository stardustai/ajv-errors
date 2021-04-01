import { assertNever } from './utils';

export enum SlotType {
  Box2D = 'box2d',
  Cuboid = 'cuboid',
  Box3D = 'box3d',
  Point = 'point',
  Line = 'line',
  Splines = 'splines',
  Polygon = 'polygon',
  Text = 'text',
  SemanticSegmentation3D = 'semantic-segmentation3d',
}

export type Point = { x: number; y: number };
export type Point3D = { x: number; y: number; z: number };

export type Selected3DPoints = {
  [index: string]: Point3D;
};

export type Box3DGeometry = {
  width: number;
  height: number;
  depth: number;
};

export type Box3D = number[];

export type Plane = {
  topLeft: Point;
  topRight: Point;
  bottomRight: Point;
  bottomLeft: Point;
};

export type SlotBase = {
  id: string;
  label: string;
  source?: string;
};

export type TextSlot = SlotBase & {
  type: SlotType.Text;
  text: string;
  start: number;
  length: number;
};

export type CuboidSlot = SlotBase & {
  type: SlotType.Cuboid;
  binding?: boolean;
  vertices: {
    front: Plane;
    back: Plane;
    combineTransform?: boolean;
  };
};

export type PolygonSlot = SlotBase & {
  type: SlotType.Polygon;
  vertices: Point[];
};

export type Box2dSlot = SlotBase & {
  type: SlotType.Box2D;
  plane: Plane;
  binding?: boolean;
};

export type PointSlot = SlotBase & {
  type: SlotType.Point;
  point: Point;
};

export type Box3DSlot = SlotBase & {
  type: SlotType.Box3D;
  box: Box3D;
};

export type SemanticSegmentation3DSlot = SlotBase & {
  type: SlotType.SemanticSegmentation3D;
  points: Selected3DPoints;
};

export type LineSlot = SlotBase & {
  type: SlotType.Line;
  vertices: Point[];
};

export type SplinesSlot = SlotBase & {
  type: SlotType.Splines;
  vertices: Point[];
};

export type Slot =
  | TextSlot
  // | Box2dSlot
  // | Box3DSlot
  // | SemanticSegmentation3DSlot
  // | PointSlot
  | LineSlot;
// | SplinesSlot
// | CuboidSlot
// | PolygonSlot;
