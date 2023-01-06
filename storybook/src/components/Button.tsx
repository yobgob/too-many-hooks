import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
  variant?: 'fill' | 'outline' | 'text'
  color?: string
}

const Button: React.FC<Props> = ({ variant = 'fill', color, className, ...props }) => {
  return (
    <button
      className={`px-1.5 py-1 border rounded-md bg-transparent border-transparent disabled:hover:no-underline  ${
        variant === 'fill'
          ? `bg-blue-500 hover:underline text-white disabled:bg-slate-500`
          : variant === 'outline'
          ? `bg-white border-slate-800 hover:underline disabled:text-slate-600`
          : 'hover:bg-slate-100'
      } ${className}`}
      style={
        variant === 'fill'
          ? { backgroundColor: color }
          : variant === 'outline'
          ? { borderColor: color }
          : { color }
      }
      {...props}
    />
  )
}

export default Button
