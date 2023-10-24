import useAsync from "./useAsync"

const DEFAULT_OPTIONS = {
  method : 'POST',
  headers: { "Content-Type": "application/json" },
}

export default function usePost(url,data, dependencies = [],options = {},) {
  return useAsync(() => {
    return fetch(url, { ...DEFAULT_OPTIONS,body:JSON.stringify(data), ...options })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return res.json().then(json => Promise.reject(json))
    })
  }, dependencies)
}