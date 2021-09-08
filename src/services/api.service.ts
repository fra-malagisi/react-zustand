const init: RequestInit = {};

export class ApiService {
  static get = <T>(url: string, queryParams?: Record<string, string>, optInit?: RequestInit): Promise<T> => {
    const urlWithQuery = new URL(url);
    if (queryParams) {
      urlWithQuery.search = new URLSearchParams(queryParams).toString();
    }
    return fetch(urlWithQuery.href, { ...init, ...optInit, method: 'GET' }).then((res: Response) => res.json());
  };

  static post = <T>(url: string, request?: any, queryParams?: Record<string, string>, optInit?: RequestInit): Promise<T> => {
    const urlWithQuery = new URL(url);
    if (queryParams) {
      urlWithQuery.search = new URLSearchParams(queryParams).toString();
    }
    return fetch(urlWithQuery.href, { ...init, ...optInit, method: 'POST', body: JSON.stringify(request), headers: {'Content-Type': 'application/json'}}).then((res: Response) => res.json());
  };

  static delete = (url: string, request?: any, queryParams?: Record<string, string>, optInit?: RequestInit): Promise<any> => {
    const urlWithQuery = new URL(url);
    if (queryParams) {
      urlWithQuery.search = new URLSearchParams(queryParams).toString();
    }
    return fetch(urlWithQuery.href, { ...init, ...optInit, method: 'DELETE', body: JSON.stringify(request), headers: {'Content-Type': 'application/json'}}).then((res: Response) => res.json());
  };
}