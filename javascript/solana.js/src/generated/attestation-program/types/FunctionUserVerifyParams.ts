import { SwitchboardProgram } from "../../../SwitchboardProgram.js";
import * as types from "../types/index.js"; // eslint-disable-line @typescript-eslint/no-unused-vars

import * as borsh from "@coral-xyz/borsh";
import { PublicKey } from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { BN } from "@switchboard-xyz/common"; // eslint-disable-line @typescript-eslint/no-unused-vars

export interface FunctionUserVerifyParamsFields {
  observedTime: BN;
  isFailure: boolean;
  mrEnclave: Array<number>;
  requestSlot: BN;
}

export interface FunctionUserVerifyParamsJSON {
  observedTime: string;
  isFailure: boolean;
  mrEnclave: Array<number>;
  requestSlot: string;
}

export class FunctionUserVerifyParams {
  readonly observedTime: BN;
  readonly isFailure: boolean;
  readonly mrEnclave: Array<number>;
  readonly requestSlot: BN;

  constructor(fields: FunctionUserVerifyParamsFields) {
    this.observedTime = fields.observedTime;
    this.isFailure = fields.isFailure;
    this.mrEnclave = fields.mrEnclave;
    this.requestSlot = fields.requestSlot;
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.i64("observedTime"),
        borsh.bool("isFailure"),
        borsh.array(borsh.u8(), 32, "mrEnclave"),
        borsh.u64("requestSlot"),
      ],
      property
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new FunctionUserVerifyParams({
      observedTime: obj.observedTime,
      isFailure: obj.isFailure,
      mrEnclave: obj.mrEnclave,
      requestSlot: obj.requestSlot,
    });
  }

  static toEncodable(fields: FunctionUserVerifyParamsFields) {
    return {
      observedTime: fields.observedTime,
      isFailure: fields.isFailure,
      mrEnclave: fields.mrEnclave,
      requestSlot: fields.requestSlot,
    };
  }

  toJSON(): FunctionUserVerifyParamsJSON {
    return {
      observedTime: this.observedTime.toString(),
      isFailure: this.isFailure,
      mrEnclave: this.mrEnclave,
      requestSlot: this.requestSlot.toString(),
    };
  }

  static fromJSON(obj: FunctionUserVerifyParamsJSON): FunctionUserVerifyParams {
    return new FunctionUserVerifyParams({
      observedTime: new BN(obj.observedTime),
      isFailure: obj.isFailure,
      mrEnclave: obj.mrEnclave,
      requestSlot: new BN(obj.requestSlot),
    });
  }

  toEncodable() {
    return FunctionUserVerifyParams.toEncodable(this);
  }
}
