'use client'
import React from 'react'
import Estimate from '../estimate/estimate'
import Letstalk from '../letstalk/letstalk'
import Mainheading from '../mainheading/mainheading'
import Readmore from '../readbutton/readbutton'
import styles from './breadcrumbs.module.css'
import Link from 'next/link';

import { usePathname } from "next/navigation"

const links = {
  "websiteuiux": [
    {
      href: "/",
      title: "Home"
    },
    {
      href: "/ecommerceuiux",
      title: "E commerece UI/UX"
    },
    {
      href: "#",
      title: "Website UI/UX"
    }
  ],
  "ourstory": [
    {
      href: "/",
      title: "Home"
    },
    {
      href: "/ourstory",
      title: "Our Story"
    },
  ]
}


const Breadcrumbs = ({ mainlink, href }) => {

  const path = usePathname().split("/").pop()

  console.log("pathname", path)
  return (
    <>

      <div className={styles.container}>
        <div className={styles.quicknav}>
          {
            links[path].map((link, i) => (
              <>
                {
                  i === links[path]?.length - 1

                    ? <div className={styles.main}>
                      {link.title}
                    </div>
                    : <Link href={link.href} className={styles.sub}>
                      {link.title}
                    </Link>
                }

                {
                  i === links[path]?.length - 1 ? " " : <span>/</span>
                }
              </>
            ))
          }

        </div>

      </div>
    </>
  )
}

export default Breadcrumbs