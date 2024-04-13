import s from './style.module.scss'
// UI
import Footer from '@/components/UI/Footer'
import Header from '@/components/UI/Header'
import SideBar from '../UI/SideBar'
// HOOK
import { useState } from 'react'

export default function Layout({ children }) {

  const [bar, setBar] = useState(false)

  const barOpen = () => {
    setBar( p => !p )
  }
  return (
    <div className={s.layout}>
      <SideBar bar={bar} close={() => barOpen()}/>
      
      <Header bar={bar} open={() => barOpen()} />
      {children}
      <Footer />
    </div>
  )
}
