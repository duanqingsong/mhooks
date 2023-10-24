import React,{useAsync} from "@duanqs/mhooks"

export default function UseAsyncComponent() {
  const { loading, error, value } = useAsync(() => {
    return new Promise((resolve, reject) => {
      const success = true
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error")
      }, 1000)
    })
  })

  return (
    <div>
      <div>{loading?'loading':'done'}</div>
      <div>{error}</div>
      <div>{value}</div>
    </div>
  )
}