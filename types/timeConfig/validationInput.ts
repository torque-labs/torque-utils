import { TimeConfig } from "./config";

/**
 * Time validation request body when getting time validation
 */
export type ValidateTimeRequirent = {
  body: {
    /**
     * The time config to validate
     */
    timeConfig: TimeConfig;
    /**
     * The user's public key
     */
    userPublicKey?: string;
    /**
     * The initial transaction signature
     */
    initalTransaction?: string;
    /**
     * Extra data to pass to the time config
     */
    data?: any;
  };
};
