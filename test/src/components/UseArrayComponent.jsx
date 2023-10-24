import React,{useArray} from "@duanqs/mhooks"

export default function UseArrayComponent() {
  const { values, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <div>{values.join(", ")}</div>
      <button onClick={() => push(7)}>push(7)</button>
      <button onClick={() => update(1, 9)}>update(1,9)</button>
      <button onClick={() => remove(1)}>remove(1)</button>
      <button onClick={() => filter(n => n < 3)}>
      {`filter(n => n < 3)`}
      </button>
      <button onClick={() => set([1, 2])}>set([1, 2])</button>
      <button onClick={clear}>clear()</button>
    </div>
  )
}