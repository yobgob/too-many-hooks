import React, { ComponentProps } from 'react'

type OptionValue = React.OptionHTMLAttributes<HTMLOptionElement>['value']

interface Props<T extends OptionValue> extends Omit<ComponentProps<'select'>, 'onChange'> {
  label?: React.ReactNode
  onChange: (value: T) => void
  options: { value: T; label: string }[]
  variant?: 'fill' | 'outline' | 'text'
  color?: string
}

const Select = <T extends OptionValue>({
  label,
  onChange,
  options,
  className,
  variant = 'outline',
  color,
  ...props
}: Props<T>) => {
  return (
    <label className="flex items-baseline gap-1">
      {label}
      <select
        className={`pl-1.5 pr-8 py-1 border rounded-md bg-transparent border-transparent disabled:hover:no-underline  ${
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
        onChange={e => onChange(e.target.value as T)}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={label} value={value} label={label} />
        ))}
      </select>
    </label>
  )
}

export default Select
