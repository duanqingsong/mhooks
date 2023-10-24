import useFetch from "./useFetch"

const DEFAULT_OPTIONS = {
  method : 'GET',
}

/**
 * get
 * @param {*} url 
 * @param {*} dependencies 
 * @returns 
 */
export default function useGet(url, dependencies = []) {
  return useFetch(url, { ...DEFAULT_OPTIONS },dependencies)
}