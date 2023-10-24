import React,{ useState } from "react"
import UseArrayComponent from "./components/UseArrayComponent"
import UseNetStatusComponent from "./components/UseNetStatusComponent"
import UseAsyncComponent from './components/UseAsyncComponent'
import UseFetchComponent from './components/UseFetchComponent'
import UseStorageComponent from './components/UseStorageComponent'

import './style.css'
function App() {
  const [key,setKey]=useState('useArray');

  return <div style={{padding:'20px'}}>
    <div className="menu">
      <div onClick={()=>{setKey('useArray')}} className={key=='useArray'?"active":''}>useArray</div>
      <div onClick={()=>{setKey('useNetStatus')}} className={key=='useNetStatus'?"active":''}>useNetStatus</div>
      <div onClick={()=>{setKey('useAsync')}} className={key=='useAsync'?"active":''}>useAsync</div>
      <div onClick={()=>{setKey('useFetch')}} className={key=='useFetch'?"active":''}>useGet</div>
      <div onClick={()=>{setKey('useStorage')}} className={key=='useStorage'?"active":''}>useStorage</div>
    </div>

    <div style={{paddingTop:'20px'}}>
      {key==='useArray' && <UseArrayComponent />}
      {key==='useNetStatus' && <UseNetStatusComponent /> }
      {key==='useAsync' && <UseAsyncComponent /> }
      {key==='useFetch' && <UseFetchComponent /> }
      {key==='useStorage' && <UseStorageComponent /> }
    </div>
    
  </div>
}

export default App