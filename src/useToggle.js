import { useState } from "react"

/**
 * const [value,setValue]=useToggle(false);  
 * setValue(true) ==> value=false
 * @param {*} defaultValue true|false
 * @returns 
 */
export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value) {
    setValue(currentValue =>
      typeof value === "boolean" ? value : !currentValue
    )
  }

  return [value, toggleValue]
}