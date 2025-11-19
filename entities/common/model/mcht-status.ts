export type MchtStatusCodeType = "READY" | "ACTIVE" | "INACTIVE" | "CLOSED";

export interface MchtStatus {
  code: MchtStatusCodeType;
  description: string;
}
