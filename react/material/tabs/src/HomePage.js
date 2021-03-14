import r from 'react'
import {Tabs, Tab} from '@material-ui/core'

export default function HomePage(){

  const [currentTab, setCurrentTab] = r.useState(0)

  return (
    <>
    <Tabs value={currentTab} onChange={(e, t)=>setCurrentTab(t)}>
      <Tab label='Tab1'/>
      <Tab label='Tab2'/>
    </Tabs>
    {currentTab === 0 && 'Tab1 Selected'}
    {currentTab === 1 && 'Tab2 Selected'}
    </>
  )
}