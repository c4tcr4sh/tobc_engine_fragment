// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';



export class SpatialStructure {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SpatialStructure {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSpatialStructure(bb:flatbuffers.ByteBuffer, obj?:SpatialStructure):SpatialStructure {
  return (obj || new SpatialStructure()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSpatialStructure(bb:flatbuffers.ByteBuffer, obj?:SpatialStructure):SpatialStructure {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SpatialStructure()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

localId():number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : null;
}

mutate_local_id(value:number):boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
}

category():string|null
category(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
category(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

children(index: number, obj?:SpatialStructure):SpatialStructure|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new SpatialStructure()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

childrenLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startSpatialStructure(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addLocalId(builder:flatbuffers.Builder, localId:number) {
  builder.addFieldInt32(0, localId, null);
}

static addCategory(builder:flatbuffers.Builder, categoryOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, categoryOffset, 0);
}

static addChildren(builder:flatbuffers.Builder, childrenOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, childrenOffset, 0);
}

static createChildrenVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startChildrenVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endSpatialStructure(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createSpatialStructure(builder:flatbuffers.Builder, localId:number|null, categoryOffset:flatbuffers.Offset, childrenOffset:flatbuffers.Offset):flatbuffers.Offset {
  SpatialStructure.startSpatialStructure(builder);
  if (localId !== null)
    SpatialStructure.addLocalId(builder, localId);
  SpatialStructure.addCategory(builder, categoryOffset);
  SpatialStructure.addChildren(builder, childrenOffset);
  return SpatialStructure.endSpatialStructure(builder);
}
}
