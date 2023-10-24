import { useCallback, useState, useEffect } from "react"

/**
  const [age, setAge, removeAge] = useLocalStorage("age", 26)

 * @param {*} key 
 * @param {*} defaultValue 
 * @returns 
 */
export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage)
}

/**
 
  const [name, setName, removeName] = useSessionStorage("name", "Kyle")

 * @param {*} key 
 * @param {*} defaultValue 
 * @returns 
 */
export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.sessionStorage)
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key)
    storageObject.setItem(key, JSON.stringify(value))
  }, [key, value, storageObject])

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])

  return [value, setValue, remove]
}