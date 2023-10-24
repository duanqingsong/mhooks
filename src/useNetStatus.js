import { useState } from "react"
import useEvent from "./useEvent"

export default function useNetStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEvent("online", () => setOnline(navigator.onLine))
  useEvent("offline", () => setOnline(navigator.onLine))

  return online
}