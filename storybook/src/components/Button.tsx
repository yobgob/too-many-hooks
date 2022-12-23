import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
  variant?: 'fill' | 'outline' | 'text'
}

const Button: React.FC<Props> = ({ variant = 'fill', className, ...props }) => {
  return (
    <button
      className={`px-1.5 py-1 border rounded-md bg-transparent border-transparent disabled:hover:no-underline  ${
        variant === 'fill'
          ? 'bg-blue-500 hover:underline text-white disabled:bg-slate-500 '
          : variant === 'outline'
          ? 'bg-transparent border-slate-800 hover:underline disabled:text-slate-600'
          : 'hover:bg-slate-100'
      } ${className}`}
      {...props}
    />
  )
}

export default Button
