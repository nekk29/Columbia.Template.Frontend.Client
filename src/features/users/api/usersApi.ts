import { environment } from "@/environments/environment";
import { createAxiosClient } from "@/core/api/apiClient";

import type { ResponseDto } from "@/models/base/api/ResponseDto";

import type { LoginModel } from "@/features/users/models/LoginModel";
import type { UserInfoModel } from "@/features/users/models/UserInfoModel";
import type { LoginResultModel } from "@/features/users/models/LoginResultModel";

const baseUrl = `${environment.backend.securityUrl}/user`;
const client = createAxiosClient(baseUrl);

export async function login(loginDto: LoginModel): Promise<ResponseDto<LoginResultModel>> {
  try {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-ApplicationCode': loginDto.applicationCode,
      'X-RememberMe': loginDto.rememberMe.toString(),
      'X-ReturnUrl': loginDto.returnUrl
    };

    const formData = new URLSearchParams();

    formData.append("grant_type", "password");
    formData.append("client_id", environment.security.clientId);
    formData.append("scope", environment.security.scope);
    formData.append("username", loginDto.userName);
    formData.append("password", loginDto.password);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data } = await client.post<any>("/login", formData, {
      headers,
    });

    const response: ResponseDto<LoginResultModel> = {
      isValid: true,
      messages: [],
      data: data
    };

    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const response: ResponseDto<LoginResultModel> = {
      isValid: false,
      messages: [],
      data: null
    };

    if (error?.response?.data?.error_description) {
      response.messages.push({
        key: "error",
        messageType: 3,
        messageTypeTitle: "Error",
        message: `${error?.response?.data?.error_description}`
      });
    } else {
      response.messages.push({
        key: "error",
        messageType: 3,
        messageTypeTitle: "Error",
        message: "An unexpected error occurred during login."
      });
    }
    return response as ResponseDto<LoginResultModel>;
  }
}

export async function userInfo(): Promise<UserInfoModel> {
  const { data } = await client.get<UserInfoModel>(`/info`);
  return data;
}
