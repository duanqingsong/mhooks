import { useState } from "react"

/**
 * const { values, set, push, filter, update, remove, clear }=useArray([1,2,3])
 * @param {*} defaultValue 数组
 * @returns 
 */
export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)
  
  function push(item) {
    setArray(origin => [...origin, item])
  }

  function filter(callback) {
    setArray(origin => origin.filter(callback))
  }

  function update(index, newItem) {
    setArray(origin => [
      ...origin.slice(0, index),
      newItem,
      ...origin.slice(index + 1, origin.length),
    ])
  }

  function remove(index) {
    setArray(origin => [...origin.slice(0, index), ...origin.slice(index + 1, origin.length)])
  }

  function clear() {
    setArray([])
  }

  return { values:array, set: setArray, push, filter, update, remove, clear }
}