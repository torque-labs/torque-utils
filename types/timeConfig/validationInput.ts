import { TimeConfig } from ".";

export type ValidateTimeRequirent = {
  body: {
    timeConfig: TimeConfig;
    userPublicKey?: string;
    initalTransaction?: string;
    data?: any;
  };
};
