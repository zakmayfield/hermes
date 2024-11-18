"use server";

type ResponseData<T> = {
  error: string | null;
  response?: T | null;
};

type FetcherOptions<T> = {
  dbFn?: () => Promise<T>;
  fetchOptions?: {
    baseUrl: string;
    queryParams?: string[];
    init?: RequestInit;
  };
};

/**
 * ### Asynchronously fetches data either from a database or a remote URL
 * 
 * **Note**: Should not be used with libraries like `TanstackQuery` due to the 
 structure of the response as it will never populate the `error` object
 *
 * @param options - Object containing configuration options.
 * @param options.dbFn - Function that returns a Promise resolving to the database query result.
 * @param options.fetchOptions - Object containing `fetch` options.
 * @param options.fetchOptions.url - URL to request data.
 * @param options.fetchOptions.init - Optional initialization for `fetch` request.
 *
 * @returns Promise resolving to `ResponseData`
 * @returns ResponseData.error - Error message if the operation fails.
 * @returns ResponseData.response - Fetched data or database query result.
 * 
 * @example
 * 
 ```typescript
  // dbFn
  const response = await fetcher({
    options: {
      dbFn: async () => await db.user.findMany()
    }
  })

  // fetchOptions
  const response = await fetcher({
    options: {
      fetchOptions: {
        url: "https://pokeapi.co/api/v2/pokemon?limit=3",
        init: {
          method: "GET"
        }
      }
    }
  })
 ```
 */
export const fetcher = async <T>({
  options
}: {
  options?: FetcherOptions<T>;
}): Promise<ResponseData<T>> => {
  if (options?.dbFn) {
    const { dbFn } = options;

    try {
      const data = await dbFn();

      return {
        error: null,
        response: data
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Unexpected server error",
        response: null
      };
    }
  }

  if (options?.fetchOptions?.baseUrl) {
    const { init, ...rest } = options.fetchOptions;
    const url = buildURL({ ...rest });

    try {
      const response = await fetch(url, init);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return {
        error: null,
        response: await response.json()
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Unexpected server error",
        response: null
      };
    }
  }

  return {
    error: null,
    response: null
  };
};

function buildURL({ baseUrl, queryParams }: { baseUrl: string; queryParams?: string[] }) {
  const url = new URL(baseUrl);

  queryParams?.forEach((param) => {
    const keyValue = param.split("=");
    const key = keyValue[0];
    const value = keyValue[1];
    url.searchParams.set(key, value);
  });

  return url;
}
