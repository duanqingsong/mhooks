import { useEffect, useRef } from "react"

/**
  用法： 
  const [key, setKey] = useState("")  
  useEventListener("keydown", e => {  
    setKey(e.key)  
  })  
  
  return <div>Last Key: {key}</div>  

 * @param {*} eventType 
 * @param {*} callback 
 * @param {*} element 
 */
export default function useEventListener(
  eventType,
  callback,
  element = window
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = e => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}