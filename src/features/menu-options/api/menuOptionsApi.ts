import { environment } from "@/environments/environment";
import { createAxiosClient } from "@/core/api/apiClient";

import type { ResponseDto } from "@/models/base/api/ResponseDto";
import type { GetMenuOptionModel } from "@/features/menu-options/models/getMenuOptionModel";

const baseUrl = `${environment.backend.securityUrl}/menu-option`;
const client = createAxiosClient(baseUrl);

export async function getMenuOption(id: string): Promise<ResponseDto<GetMenuOptionModel>> {
  const { data } = await client.get<ResponseDto<GetMenuOptionModel>>(`/${id}`);
  return data;
}

export async function listMenuOptions(applicationCode: string): Promise<ResponseDto<GetMenuOptionModel[]>> {
  const { data } = await client.get<ResponseDto<GetMenuOptionModel[]>>(`/${applicationCode}/list`);
  return data;
}

export async function listAllMenuOptions(applicationCode: string): Promise<ResponseDto<GetMenuOptionModel[]>> {
  const { data } = await client.get<ResponseDto<GetMenuOptionModel[]>>(`/${applicationCode}/list-all`);
  return data;
}

export async function listTreeMenuOptions(applicationCode: string): Promise<ResponseDto<GetMenuOptionModel[]>> {
  const { data } = await client.get<ResponseDto<GetMenuOptionModel[]>>(`/${applicationCode}/tree`);
  return data;
}

export async function listTreeAllMenuOptions(applicationCode: string): Promise<ResponseDto<GetMenuOptionModel[]>> {
  const { data } = await client.get<ResponseDto<GetMenuOptionModel[]>>(`/${applicationCode}/tree-all`);
  return data;
}
