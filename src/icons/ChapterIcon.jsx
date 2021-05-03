import React from 'react'

export default function ChapterIcon(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.667 8c0 .518.565.838 1.01.572L7 7.777l1.324.795A.667.667 0 009.334 8V1.333a.667.667 0 00-.667-.666H5.333a.667.667 0 00-.666.666V8zm1.99-1.572L6 6.823V2h2v4.823l-.657-.395a.667.667 0 00-.686 0z"
        fill="#E66CFF"
        fillOpacity={0.98}
      />
      <path
        d="M3.333 2h7.334a2 2 0 012 2v8a2 2 0 01-2 2H4a.667.667 0 000 1.333h6.667A3.333 3.333 0 0014 12V4A3.333 3.333 0 0010.667.667h-8A.667.667 0 002 1.333V12a.667.667 0 101.333 0V2z"
        fill="#9013FE"
      />
      <circle cx={10.667} cy={12} r={0.667} fill="#FF9F00" />
    </svg>
  )
}
