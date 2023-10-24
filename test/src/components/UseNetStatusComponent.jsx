import React,{useNetStatus} from '@duanqs/mhooks'

export default function UseNetStatusComponent() {
  const online = useNetStatus()

  return <div>Online:{online.toString()}</div>
}