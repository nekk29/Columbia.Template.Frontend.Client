import { environment } from "@/environments/environment";
import { createAxiosClient } from "@/core/api/apiClient";

import type { ResponseDto } from "@/models/base/api/ResponseDto";
import type { PermissionModel } from "@/features/permissions/models/permissionModel";

const baseUrl = `${environment.backend.securityUrl}/permission`;
const client = createAxiosClient(baseUrl);

export async function userPermissions(applicationCode: string): Promise<ResponseDto<PermissionModel[]>> {
  const { data } = await client.get<ResponseDto<PermissionModel[]>>(`/${applicationCode}/user-permissions`);
  return data;
}
