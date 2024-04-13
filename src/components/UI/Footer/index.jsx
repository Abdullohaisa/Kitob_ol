import React from 'react'
import scr from './style.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={scr.footer}>
      <div className="container">
        <div className={scr.topFooter}>
          <ul>
            <li>
              <Link href="/test">
               <img src="/images/logo.1.png" alt="" />
              </Link>
            </li>
            <li>Onlayn platformaga tegishli barcha materiallar "Kitob Ol" MCHJning mulki hisoblanadi. Ushbu Saytdan kitob ayrboshlashdan tashqari boshqa maqsadlarda foydalanish qonunan man etiladi.</li>
          </ul>
          <ul>
              <span>
                <Link href="/test"> Ommaviy oferta </Link>
              </span>
              <span>
                <Link href="/test">Sayt haqida</Link>
              </span>
              <span>
                <Link href="/test">Yo'riqnoma</Link>
              </span>
          </ul>
          <ul>77 787 88 77</ul>
        </div>
      </div>
        <div className={scr.bottomFooter}>
          <div className="container">
            <ul>
              <li>
                  Copywright R 2023
              </li>
              <li>
                  Designed by: <span>Nasibjon</span>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer
