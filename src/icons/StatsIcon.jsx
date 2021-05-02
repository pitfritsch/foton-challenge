import React from 'react'

export default function StatsIcon(props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.667 11.333V3.667a1 1 0 011-1h8.666a1 1 0 011 1v8.666a1 1 0 01-1 1h-9a.667.667 0 000 1.334h9a2.333 2.333 0 002.334-2.334V3.667a2.333 2.333 0 00-2.334-2.334H3.667a2.333 2.333 0 00-2.334 2.334v7.666a.667.667 0 101.334 0z"
        fill="#fff"
        fillOpacity={0.653}
      />
      <path
        d="M4.333 8.667v2a.667.667 0 001.334 0v-2a.667.667 0 00-1.334 0zM10.333 7.333v3.334a.667.667 0 001.334 0V7.333a.667.667 0 00-1.334 0zM7.333 5.333v5.334a.667.667 0 101.334 0V5.333a.667.667 0 00-1.334 0z"
        fill="#C8C8C8"
      />
      <circle cx={11} cy={5.333} r={0.667} fill="#C8C8C8" />
    </svg>
  )
}
