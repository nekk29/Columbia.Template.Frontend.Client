import type { ResponseDto } from "@/models/base/api/ResponseDto";
import type { PermissionModel } from "@/features/permissions/models/permissionModel";

import {
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";

import {
  userPermissions
} from "@/features/permissions/api/permissionsApi";

export const permissionKeys = {
  all: ["permissions"] as const,
  rolePermissions: (roleId: string) => ["permissions", "role", roleId] as const,
  userPermissions: (applicationCode: string) => ["permissions", "user", applicationCode] as const,
};

export function useUserPermissions(
  applicationCode: string,
  options?: Omit<UseQueryOptions<ResponseDto<PermissionModel[]>, Error>, "queryKey" | "queryFn">,
) {
  return useQuery<ResponseDto<PermissionModel[]>, Error>({
    queryKey: permissionKeys.userPermissions(applicationCode),
    queryFn: () => userPermissions(applicationCode),
    enabled: Boolean(applicationCode),
    ...options,
  });
}
