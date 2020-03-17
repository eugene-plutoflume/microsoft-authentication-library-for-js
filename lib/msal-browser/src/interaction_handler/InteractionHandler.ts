/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { PublicClientSPA, TokenResponse } from "@azure/msal-common";
import { BrowserStorage } from "../cache/BrowserStorage";

/**
 * Abstract class which defines operations for a browser interaction handling class.
 */
export abstract class InteractionHandler {

    protected authModule: PublicClientSPA;
    protected browserStorage: BrowserStorage;

    constructor(authCodeModule: PublicClientSPA, storageImpl: BrowserStorage) {
        this.authModule = authCodeModule;
        this.browserStorage = storageImpl;
    }

    /**
     * Function to enable user interaction.
     * @param requestUrl
     */
    abstract showUI(requestUrl: string): Window;

    /**
     * Function to handle response parameters from hash.
     * @param locationHash
     */
    abstract async handleCodeResponse(locationHash: string): Promise<TokenResponse>;
}
