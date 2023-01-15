import React, { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
  variant?: 'fill' | 'outline' | 'text'
}

const Button: React.FC<Props> = ({ variant = 'fill', className, ...props }) => {
  return (
    <button
      className={`rounded-md border border-transparent bg-transparent px-1.5 py-1 disabled:hover:no-underline  ${
        variant === 'fill'
          ? 'bg-blue-500 text-white hover:underline disabled:bg-slate-500 '
          : variant === 'outline'
          ? 'border-slate-800 bg-transparent hover:underline disabled:text-slate-600'
          : 'hover:bg-slate-100'
      } ${className}`}
      {...props}
    />
  )
}

export default Button
