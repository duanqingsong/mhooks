import { useState } from "react"
import {useGet,usePost} from "@duanqs/mhooks"

export default function UseFetchComponent() {
  const [id, setId] = useState(1)
  const { loading, error, value } = useGet(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    [id]
  )

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId(currentId => currentId + 1)}>
        Increment ID
      </button>
      <div>{loading?'loading':'done'}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}