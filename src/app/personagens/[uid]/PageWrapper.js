"use client"
import { motion } from 'framer-motion'
import React from 'react'

export default function PageWrapper({ children }) {
  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{ ease: "easeInOut", duration: 1.2 }}
    >{children}</motion.div>
  )
}
