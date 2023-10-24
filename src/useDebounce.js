import { useEffect } from "react"
import useTimeout from "./useTimeout"
/**
  用法 :  
  const [count, setCount] = useState(10)  
  useDebounce(() => alert(count), 1000, [count])  
  
  return (  
    <div>  
      <div>{count}</div>  
      <button onClick={() => setCount(c => c + 1)}>Increment</button>  
    </div>  
  )  
 * @param {*} callback 
 * @param {*} delay 
 * @param {*} dependencies 
 */
export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [clear])
}