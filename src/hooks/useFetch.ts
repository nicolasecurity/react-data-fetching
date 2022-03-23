import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from "react";

const api = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        api.get(url)
        .then(response => {
          setData(response.data);
        })
        .finally(() => {
            setIsFetching(false);
        })
      }, [])

      return { data, isFetching }
}