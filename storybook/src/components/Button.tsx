import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
  variant?: 'fill' | 'outline' | 'text'
  color?: string
}

const Button: React.FC<Props> = ({ variant = 'fill', color, className, ...props }) => {
  return (
    <button
      className={`rounded-md border border-transparent bg-transparent px-1.5 py-1 disabled:hover:no-underline  ${
        variant === 'fill'
          ? 'bg-blue-500 text-white hover:underline disabled:bg-slate-500 '
          : variant === 'outline'
          ? 'bg-white border-slate-800 hover:underline disabled:text-slate-600'
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
