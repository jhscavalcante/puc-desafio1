import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import api from '../utils/api'

import { ApiError } from '../types/api'
import { errorHandler } from '../utils/errorHandler'

export const usePost = <T extends {}>(url: string) => {
  const apiPost = async (object: T) => {
    try {
      await api.post<T, AxiosResponse<{ payload: T }>>(url, object)
      return true
    } catch (e) {
      return e
    }
  }

  return {
    apiPost
  }
}

export const useGet = <T extends {}>(url: string) => {
  const [response, setResponse] = useState<AxiosResponse | undefined>(undefined)
  const [error, setError] = useState<ApiError>()
  const [loading, setLoading] = useState(false)
  const apiFetch = async () => {
    try {
      const response = await api.get<T, AxiosResponse<{ payload: T }>>(url)
      setResponse(response)
    } catch (e) {
      setResponse(undefined)
      setError(errorHandler(e))
      // setError(e);
    }
    setLoading(false)
  }
  useEffect(() => {
    setLoading(true)
    apiFetch()
  }, [])
  return {
    response,
    error,
    loading
  }
}
