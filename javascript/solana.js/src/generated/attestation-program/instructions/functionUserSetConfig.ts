import { SwitchboardProgram } from "../../../SwitchboardProgram.js";
import * as types from "../types/index.js"; // eslint-disable-line @typescript-eslint/no-unused-vars

import * as borsh from "@coral-xyz/borsh"; // eslint-disable-line @typescript-eslint/no-unused-vars
import {
  AccountMeta,
  PublicKey,
  TransactionInstruction,
} from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { BN } from "@switchboard-xyz/common"; // eslint-disable-line @typescript-eslint/no-unused-vars

export interface FunctionUserSetConfigArgs {
  params: types.FunctionUserSetConfigParamsFields;
}

export interface FunctionUserSetConfigAccounts {
  user: PublicKey;
  authority: PublicKey;
}

export const layout = borsh.struct([
  types.FunctionUserSetConfigParams.layout("params"),
]);

export function functionUserSetConfig(
  program: SwitchboardProgram,
  args: FunctionUserSetConfigArgs,
  accounts: FunctionUserSetConfigAccounts
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.user, isSigner: false, isWritable: true },
    { pubkey: accounts.authority, isSigner: true, isWritable: false },
  ];
  const identifier = Buffer.from([16, 202, 74, 89, 109, 97, 126, 26]);
  const buffer = Buffer.alloc(1000);
  const len = layout.encode(
    {
      params: types.FunctionUserSetConfigParams.toEncodable(args.params),
    },
    buffer
  );
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len);
  const ix = new TransactionInstruction({
    keys,
    programId: program.attestationProgramId,
    data,
  });
  return ix;
}
