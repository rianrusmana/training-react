import React from 'react'

export default function ButtonKlik({text, color, klik}) {
  return (
    <div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={klik}>{text}</button>
    </div>
  )
}
