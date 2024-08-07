import React from 'react'

export default function Button({ padT, padL, textSize, bgColor, color, title, event }) {
  const style = {
    paddingTop: padT,
    paddingLeft: padL,
    paddinBottom: padT,
    paddingRight: padL,
    backgroundColor: bgColor,
    color: color,
    fontSize: textSize

  }
  return (
    <div>
      <button style={style} onClick={event} className="btn rounded-sm uppercase hover:scale-105 transition-all flex items-center gap-x-1 text-blue-500 ">{title}

      </button>
    </div>
  )
}
