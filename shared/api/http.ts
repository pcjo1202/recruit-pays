import { env } from "../config/env";

const BASE_URL = env.NEXT_PUBLIC_API_BASE_URL;

export const http = {
  get: async <T>(
    url: string,
    options?: RequestInit
  ): Promise<T | undefined> => {
    const fullUrl = `${BASE_URL}${url}`;

    const response = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }

    const data = await response.json();
    return data.data as T;
  }
};
