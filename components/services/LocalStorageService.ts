import AsyncStorage from "@react-native-async-storage/async-storage";

export const AUTH_TOKEN = "auth_token";
export const AVAILABLE_MFA_METHODS = "available_methods";
export const DEFAULT_MFA_METHOD = "default_method";
export const MFA_TOKEN = "mfa_token";
export const CURRENT_MODULE = "current_module";
export const CLIENT_IP = "client_ip";

export class LocalStorageService {
  private static _instance: LocalStorageService;

  static getInstance(): LocalStorageService {
    if (!this._instance) {
      this._instance = new LocalStorageService();
    }

    return this._instance;
  }

  async setStringValue(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  }

  async setObjectValue(key: string, value: any): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  }

  async getStringValue(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async getObjectValue(key: string): Promise<any | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async removeValue(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }
  }

  setSessionStorageValue(key: string, value: string): void {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage?.setItem(key, value);
    }
  }

  getSessionStorageValue(key: string): string | null {
    if (typeof sessionStorage !== "undefined") {
      return sessionStorage?.getItem(key);
    }
    return null;
  }

  removeSessionStorageValue(key: string): void {
    if (typeof sessionStorage !== "undefined") {
      sessionStorage?.removeItem(key);
    }
  }

  setAuthToken(token: string): void {
    this.setStringValue(AUTH_TOKEN, token);
  }

  async getAuthToken(): Promise<string | null> {
    return await this.getStringValue(AUTH_TOKEN);
  }

  removeAuthToken(): void {
    this.removeValue(AUTH_TOKEN);
  }

  setClientIP(ip: string): void {
    this.setStringValue(CLIENT_IP, ip);
  }

  async getClientIP(): Promise<string | null> {
    return await this.getStringValue(CLIENT_IP);
  }

  removeClientIP(): void {
    this.removeValue(CLIENT_IP);
  }
}

export const localStorageService = LocalStorageService.getInstance();
