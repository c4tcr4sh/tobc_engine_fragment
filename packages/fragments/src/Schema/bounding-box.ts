// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { FloatVector } from './float-vector.js';


export class BoundingBox {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):BoundingBox {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

min(obj?:FloatVector):FloatVector|null {
  return (obj || new FloatVector()).__init(this.bb_pos, this.bb!);
}

max(obj?:FloatVector):FloatVector|null {
  return (obj || new FloatVector()).__init(this.bb_pos + 12, this.bb!);
}

static sizeOf():number {
  return 24;
}

static createBoundingBox(builder:flatbuffers.Builder, min_x: number, min_y: number, min_z: number, max_x: number, max_y: number, max_z: number):flatbuffers.Offset {
  builder.prep(4, 24);
  builder.prep(4, 12);
  builder.writeFloat32(max_z);
  builder.writeFloat32(max_y);
  builder.writeFloat32(max_x);
  builder.prep(4, 12);
  builder.writeFloat32(min_z);
  builder.writeFloat32(min_y);
  builder.writeFloat32(min_x);
  return builder.offset();
}

}
