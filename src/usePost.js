import useFetch from "./useFetch"

const DEFAULT_OPTIONS = {
  method : 'POST',
}

/**
 * post
 * @param {*} url 
 * @param {*} data 
 * @param {*} dependencies 
 * @returns 
 */
export default function usePost(url,data, dependencies = []) {
  let option={...DEFAULT_OPTIONS};
  if(data){
    option={...DEFAULT_OPTIONS,body:JSON.stringify(data) }
  }
  return useFetch(url,option,dependencies)
}