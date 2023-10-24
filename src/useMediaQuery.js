import { useState, useEffect } from "react"
import useEvent from "./useEvent"

/**
  用法：   
  const isLarge = useMedia("(min-width: 200px)")  
  return <div>Large: {isLarge.toString()}</div>  

 * @param {*} query 
 * @returns 
 */
export default function useMedia(query) {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState(null)

  useEffect(() => {
    const list = window.matchMedia(query)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [query])

  useEvent("change", e => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}