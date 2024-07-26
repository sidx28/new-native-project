import { AxiosRequestHeaders } from "axios";
import { User } from "../../models/entities/User";
import { UserEditPayloadType } from "../../store/actions/auth.action";
import { baseApiService } from "./BaseApiService";

class AuthService {
  static getInstance(): AuthService {
    return new AuthService();
  }

  async signin(data: {
    email: string;
    password: string;
  }): Promise<{ user: User; token: string }> {
    return baseApiService.post("/auth/signin", data, {
      extras: { useAuth: false },
    });
  }

  async signup(data: {
    email: string;
    password: string;
    username: string;
  }): Promise<{ user: User; token: string }> {
    return baseApiService.post(
      "/auth/signup",
      { ...data },
      {
        extras: { useAuth: false },
      }
    );
  }

  async invite(token: string): Promise<{ user: User; token: string }> {
    return baseApiService.post("/invites/redeem-invite", { token });
  }

  async fetchMe(): Promise<{ user: User }> {
    return baseApiService.get("/me");
  }

  async fetchSessions(): Promise<{ user: User }> {
    return baseApiService.get("/me/sessions/active");
  }

  async deleteSessions(id: number): Promise<{}> {
    return baseApiService.delete(`/me/sessions/${id}`);
  }

  async deleteAllSessions(): Promise<{}> {
    return baseApiService.delete(`/me/sessions/all`);
  }

  async fetchUser(data: { susbcriptionPlan: string }): Promise<{ user: User }> {
    return baseApiService.get("/users-by-plan", {
      params: { susbscriptionPlan: data.susbcriptionPlan },
    });
  }

  async updateMe(user: UserEditPayloadType): Promise<{ user: User }> {
    return baseApiService.put("/me", { ...user });
  }

  async meProfileSignedURL(): Promise<{ user: User }> {
    return baseApiService.put("/me/profile-picture-signed-url");
  }

  async forgotPassword(email: string): Promise<{}> {
    return baseApiService.post("/public/password/forgot", { email });
  }

  async resetPassword(data: {
    code: string;
    email: string;
    password: string;
  }): Promise<{ user: User }> {
    return baseApiService.post("/public/password/reset", data);
  }

  async changePassword(data: {
    old_password: string;
    password: string;
    password_confirmation: string;
  }): Promise<{ user: any }> {
    return baseApiService.put("/me/password", data);
  }

  async logout(token: string): Promise<void> {
    return baseApiService.post("/auth/logout", undefined, {
      headers: { Authorization: token } as AxiosRequestHeaders,
    });
  }

  async contactUs(message: string): Promise<{ message: string }> {
    return baseApiService.post("me/contact", { message });
  }
}

export const authService = AuthService.getInstance();
