import type { ResponseDto } from "@/models/base/api/ResponseDto";

import type { LoginModel } from "@/features/users/models/LoginModel";
import type { UserInfoModel } from "@/features/users/models/UserInfoModel";
import type { LoginResultModel } from "@/features/users/models/LoginResultModel";

import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query";

import {
  login,
  userInfo,
} from "@/features/users/api/usersApi";

export const userKeys = {
  all: ["users"] as const,
  get: (id: string) => ["users", "get", id] as const,
  info: () => ["users", "info"] as const,
};

export function useLogin(
  options?: Omit<UseMutationOptions<ResponseDto<LoginResultModel>, Error, LoginModel>, "mutationFn">,
) {
  return useMutation<ResponseDto<LoginResultModel>, Error, LoginModel>({
    mutationFn: login,
    ...options,
  });
}

export function useUserInfo(
  options?: Omit<UseQueryOptions<UserInfoModel, Error>, "queryKey" | "queryFn">,
) {
  return useQuery<UserInfoModel, Error>({
    queryKey: userKeys.info(),
    queryFn: () => userInfo(),
    enabled: Boolean(true),
    ...options,
  });
}
