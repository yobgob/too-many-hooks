import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'fill' | 'outline' | 'text'
}

const Button: React.FC<Props> = ({ variant = 'fill', className, ...props }) => {
  return (
    <button
      className={`px-1.5 py-1 border rounded-md bg-transparent border-transparent  ${
        variant === 'fill'
          ? 'bg-blue-400 hover:underline'
          : variant === 'outline'
          ? 'bg-transparent border-slate-800 hover:underline'
          : 'hover:bg-slate-100'
      } ${className}`}
      {...props}
    />
  )
}

export default Button
