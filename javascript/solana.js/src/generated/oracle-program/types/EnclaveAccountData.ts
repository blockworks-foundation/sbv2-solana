import { SwitchboardProgram } from "../../../SwitchboardProgram.js";
import * as types from "../types/index.js"; // eslint-disable-line @typescript-eslint/no-unused-vars

import * as borsh from "@coral-xyz/borsh";
import { PublicKey } from "@solana/web3.js"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { BN } from "@switchboard-xyz/common"; // eslint-disable-line @typescript-eslint/no-unused-vars

export interface EnclaveAccountDataFields {
  /** The address of the signer generated within an enclave. */
  enclaveSigner: PublicKey;
  /** The authority of the EnclaveAccount which is permitted to make account changes. */
  authority: PublicKey;
  /** Queue used for attestation to verify a MRENCLAVE measurement. */
  attestationQueue: PublicKey;
  /** The quotes MRENCLAVE measurement dictating the contents of the secure enclave. */
  mrEnclave: Array<number>;
  /** The VerificationStatus of the quote. */
  verificationStatus: number;
  /** The unix timestamp when the quote was last verified. */
  verificationTimestamp: BN;
  /** The unix timestamp when the quotes verification status expires. */
  validUntil: BN;
  /** The unix timestamp when the quote was created. */
  createdAt: BN;
  /** The off-chain registry where the verifiers quote can be located. */
  quoteRegistry: Array<number>;
  /** Key to lookup the buffer data on IPFS or an alternative decentralized storage solution. */
  registryKey: Array<number>;
  /** Whether the quote is located on the AttestationQueues buffer. */
  isOnQueue: boolean;
  /** The last time the quote heartbeated on-chain. */
  lastHeartbeat: BN;
  /** The PDA bump. Only set for FunctionAccount quotes. */
  bump: number;
  /** Reserved. */
  ebuf: Array<number>;
}

export interface EnclaveAccountDataJSON {
  /** The address of the signer generated within an enclave. */
  enclaveSigner: string;
  /** The authority of the EnclaveAccount which is permitted to make account changes. */
  authority: string;
  /** Queue used for attestation to verify a MRENCLAVE measurement. */
  attestationQueue: string;
  /** The quotes MRENCLAVE measurement dictating the contents of the secure enclave. */
  mrEnclave: Array<number>;
  /** The VerificationStatus of the quote. */
  verificationStatus: number;
  /** The unix timestamp when the quote was last verified. */
  verificationTimestamp: string;
  /** The unix timestamp when the quotes verification status expires. */
  validUntil: string;
  /** The unix timestamp when the quote was created. */
  createdAt: string;
  /** The off-chain registry where the verifiers quote can be located. */
  quoteRegistry: Array<number>;
  /** Key to lookup the buffer data on IPFS or an alternative decentralized storage solution. */
  registryKey: Array<number>;
  /** Whether the quote is located on the AttestationQueues buffer. */
  isOnQueue: boolean;
  /** The last time the quote heartbeated on-chain. */
  lastHeartbeat: string;
  /** The PDA bump. Only set for FunctionAccount quotes. */
  bump: number;
  /** Reserved. */
  ebuf: Array<number>;
}

export class EnclaveAccountData {
  /** The address of the signer generated within an enclave. */
  readonly enclaveSigner: PublicKey;
  /** The authority of the EnclaveAccount which is permitted to make account changes. */
  readonly authority: PublicKey;
  /** Queue used for attestation to verify a MRENCLAVE measurement. */
  readonly attestationQueue: PublicKey;
  /** The quotes MRENCLAVE measurement dictating the contents of the secure enclave. */
  readonly mrEnclave: Array<number>;
  /** The VerificationStatus of the quote. */
  readonly verificationStatus: number;
  /** The unix timestamp when the quote was last verified. */
  readonly verificationTimestamp: BN;
  /** The unix timestamp when the quotes verification status expires. */
  readonly validUntil: BN;
  /** The unix timestamp when the quote was created. */
  readonly createdAt: BN;
  /** The off-chain registry where the verifiers quote can be located. */
  readonly quoteRegistry: Array<number>;
  /** Key to lookup the buffer data on IPFS or an alternative decentralized storage solution. */
  readonly registryKey: Array<number>;
  /** Whether the quote is located on the AttestationQueues buffer. */
  readonly isOnQueue: boolean;
  /** The last time the quote heartbeated on-chain. */
  readonly lastHeartbeat: BN;
  /** The PDA bump. Only set for FunctionAccount quotes. */
  readonly bump: number;
  /** Reserved. */
  readonly ebuf: Array<number>;

  constructor(fields: EnclaveAccountDataFields) {
    this.enclaveSigner = fields.enclaveSigner;
    this.authority = fields.authority;
    this.attestationQueue = fields.attestationQueue;
    this.mrEnclave = fields.mrEnclave;
    this.verificationStatus = fields.verificationStatus;
    this.verificationTimestamp = fields.verificationTimestamp;
    this.validUntil = fields.validUntil;
    this.createdAt = fields.createdAt;
    this.quoteRegistry = fields.quoteRegistry;
    this.registryKey = fields.registryKey;
    this.isOnQueue = fields.isOnQueue;
    this.lastHeartbeat = fields.lastHeartbeat;
    this.bump = fields.bump;
    this.ebuf = fields.ebuf;
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.publicKey("enclaveSigner"),
        borsh.publicKey("authority"),
        borsh.publicKey("attestationQueue"),
        borsh.array(borsh.u8(), 32, "mrEnclave"),
        borsh.u8("verificationStatus"),
        borsh.i64("verificationTimestamp"),
        borsh.i64("validUntil"),
        borsh.i64("createdAt"),
        borsh.array(borsh.u8(), 32, "quoteRegistry"),
        borsh.array(borsh.u8(), 64, "registryKey"),
        borsh.bool("isOnQueue"),
        borsh.i64("lastHeartbeat"),
        borsh.u8("bump"),
        borsh.array(borsh.u8(), 1024, "ebuf"),
      ],
      property
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new EnclaveAccountData({
      enclaveSigner: obj.enclaveSigner,
      authority: obj.authority,
      attestationQueue: obj.attestationQueue,
      mrEnclave: obj.mrEnclave,
      verificationStatus: obj.verificationStatus,
      verificationTimestamp: obj.verificationTimestamp,
      validUntil: obj.validUntil,
      createdAt: obj.createdAt,
      quoteRegistry: obj.quoteRegistry,
      registryKey: obj.registryKey,
      isOnQueue: obj.isOnQueue,
      lastHeartbeat: obj.lastHeartbeat,
      bump: obj.bump,
      ebuf: obj.ebuf,
    });
  }

  static toEncodable(fields: EnclaveAccountDataFields) {
    return {
      enclaveSigner: fields.enclaveSigner,
      authority: fields.authority,
      attestationQueue: fields.attestationQueue,
      mrEnclave: fields.mrEnclave,
      verificationStatus: fields.verificationStatus,
      verificationTimestamp: fields.verificationTimestamp,
      validUntil: fields.validUntil,
      createdAt: fields.createdAt,
      quoteRegistry: fields.quoteRegistry,
      registryKey: fields.registryKey,
      isOnQueue: fields.isOnQueue,
      lastHeartbeat: fields.lastHeartbeat,
      bump: fields.bump,
      ebuf: fields.ebuf,
    };
  }

  toJSON(): EnclaveAccountDataJSON {
    return {
      enclaveSigner: this.enclaveSigner.toString(),
      authority: this.authority.toString(),
      attestationQueue: this.attestationQueue.toString(),
      mrEnclave: this.mrEnclave,
      verificationStatus: this.verificationStatus,
      verificationTimestamp: this.verificationTimestamp.toString(),
      validUntil: this.validUntil.toString(),
      createdAt: this.createdAt.toString(),
      quoteRegistry: this.quoteRegistry,
      registryKey: this.registryKey,
      isOnQueue: this.isOnQueue,
      lastHeartbeat: this.lastHeartbeat.toString(),
      bump: this.bump,
      ebuf: this.ebuf,
    };
  }

  static fromJSON(obj: EnclaveAccountDataJSON): EnclaveAccountData {
    return new EnclaveAccountData({
      enclaveSigner: new PublicKey(obj.enclaveSigner),
      authority: new PublicKey(obj.authority),
      attestationQueue: new PublicKey(obj.attestationQueue),
      mrEnclave: obj.mrEnclave,
      verificationStatus: obj.verificationStatus,
      verificationTimestamp: new BN(obj.verificationTimestamp),
      validUntil: new BN(obj.validUntil),
      createdAt: new BN(obj.createdAt),
      quoteRegistry: obj.quoteRegistry,
      registryKey: obj.registryKey,
      isOnQueue: obj.isOnQueue,
      lastHeartbeat: new BN(obj.lastHeartbeat),
      bump: obj.bump,
      ebuf: obj.ebuf,
    });
  }

  toEncodable() {
    return EnclaveAccountData.toEncodable(this);
  }
}
