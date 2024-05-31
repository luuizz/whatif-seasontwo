import Link from 'next/link'
import React from 'react'
import { btnMain } from './style.css'

export default function Btn({ url, title, label }) {
  return (
    <Link className={btnMain} href={url} title={title}>
        {label}
    </Link>
  )
}
