import { Slot } from './slots';

export type Email = string;

export enum OperatorType {
  Anchor = 'anchor',
  Input = 'input',
  Slot = 'slot',
  SlotChildren = 'slotChildren',
  ChildrenOnly = 'childrenOnly',
}

export type SlotChildren = {
  slot: Slot;
  children: Annotation[];
};

export interface AnnotationSlotChildren {
  key: string;
  label: string;
  type: OperatorType.SlotChildren;
  slotsChildren: SlotChildren[];
}

export interface AnnotationSlot {
  key: string;
  label: string;
  type: OperatorType.Slot;
  slots: Slot[];
}

export type Annotation = AnnotationSlot | AnnotationSlotChildren;
