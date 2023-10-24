import { useState } from "react"

/**
 * const { array, set, push, filter, update, remove, clear }=useArray([1,2,3])
 * @param {*} defaultValue []
 * @returns 
 */
export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  function push(element) {
    setArray(a => [...a, element])
  }

  function filter(callback) {
    setArray(a => a.filter(callback))
  }

  function update(index, newItem) {
    setArray(a => [
      ...a.slice(0, index),
      newItem,
      ...a.slice(index + 1, a.length),
    ])
  }

  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }

  function clear() {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}