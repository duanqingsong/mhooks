import { useSessionStorage, useLocalStorage } from "@duanqs/mhooks"

export default function UseStorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Simon")
  const [age, setAge, removeAge] = useLocalStorage("age", 32)

  return (
    <div>
      <div style={{marginBottom:'20px'}}>
        {name} - {age}
      </div>
      <div style={{marginBottom:'20px'}}>
        <div>useSessionStorage</div>
        <button onClick={() => setName("John")}>setName("John")</button>
        <button onClick={removeName}>removeName()</button>
      </div>
      <div>
        <div>useLocalStorage</div>
        <button onClick={() => setAge(40)}>setAge(40)</button>
        <button onClick={removeAge}>removeAge()</button>
      </div>
    </div>
  )
}