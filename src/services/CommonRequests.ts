import { QueryKey, UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "@tanstack/react-query"
import { AxiosRequestConfig } from "axios"
import { axiosClient } from "./api"

type ICustomUseQueryOptions<TQueryFnData, TError, TData> = Partial<UseQueryOptions<TQueryFnData, TError, TData>>
type ICustomUseMutationOptions<D, E, P> = Partial<UseMutationOptions<D, E, P>>

export const getRequest = (url: string, config?: AxiosRequestConfig) =>
  axiosClient.get(`/${url}`, config).then((res) => res.data)

export const postRequest = <T>(url: string, payload: T, config: AxiosRequestConfig = {}) =>
  axiosClient.post(`/${url}`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...config,
  })
export const putRequest = <T>(url: string, payload: T, config?: AxiosRequestConfig) =>
  axiosClient.put(`/${url}`, payload, config)

export const patchRequest = <T>(url: string, payload: T, config?: AxiosRequestConfig) =>
  axiosClient.patch(`/${url}`, payload, config)

export const deleteRequest = (url: string, config?: AxiosRequestConfig) => axiosClient.delete(`/${url}`, config)

export const useGetQuery = <TData = unknown, TQueryFnData = unknown, TError = Error>(
  url: string,
  deps?: QueryKey,
  options?: ICustomUseQueryOptions<TQueryFnData, TError, TData>,
  config?: AxiosRequestConfig,
) => {
  return useQuery<TQueryFnData, TError, TData>({
    queryKey: deps ? [url, ...deps] : [url],
    queryFn: () => getRequest(url, config),
    ...(options ?? {}),
  })
}

export const usePostMutation = <P = unknown>(
  url: string,
  options?: ICustomUseMutationOptions<unknown, Error, P>,
  config?: AxiosRequestConfig,
) => {
  return useMutation<unknown, Error, P>({
    mutationFn: (payload) => postRequest(url, payload, config),
    ...(options ?? {}),
  })
}

export const usePutMutation = <P = unknown>(
  url: string,
  options?: ICustomUseMutationOptions<unknown, Error, P>,
  config?: AxiosRequestConfig,
) => {
  return useMutation<unknown, Error, P>({
    mutationFn: (payload) => putRequest(url, payload, config),
    ...(options ?? {}),
  })
}

export const usePatchMutation = <P = unknown>(
  url: string,
  options?: ICustomUseMutationOptions<unknown, Error, P>,
  config?: AxiosRequestConfig,
) => {
  return useMutation<unknown, Error, P>({
    mutationFn: (payload) => patchRequest(url, payload, config),
    ...(options ?? {}),
  })
}

export const useDeleteMutation = <P = unknown>(
  url: string,
  options?: ICustomUseMutationOptions<unknown, Error, P>,
  config?: AxiosRequestConfig,
) => {
  return useMutation<unknown, Error, P>({
    mutationFn: (id) => deleteRequest(url + id, config),
    ...(options ?? {}),
  })
}
