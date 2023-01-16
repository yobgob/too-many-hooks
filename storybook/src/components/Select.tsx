import React, { ComponentProps } from 'react'

type OptionValue = React.OptionHTMLAttributes<HTMLOptionElement>['value']

interface Props<T extends OptionValue> extends Omit<ComponentProps<'select'>, 'onChange'> {
  label?: React.ReactNode
  labelDirection?: 'row' | 'column'
  onChange?: React.ChangeEventHandler<HTMLSelectElement & { value: T }>
  options: { value: T; label: string }[]
  variant?: 'fill' | 'outline' | 'text'
  color?: string
}

const Select = <T extends OptionValue>({
  label,
  labelDirection = 'row',
  onChange,
  options,
  className,
  variant = 'outline',
  color,
  ...props
}: Props<T>) => {
  return (
    <label
      className={`flex ${
        labelDirection === 'row' ? 'items-baseline' : 'flex-col items-start'
      } gap-1`}
    >
      {label}
      <select
        className={`w-full rounded-md border border-transparent bg-transparent py-1 pl-1.5 pr-8 disabled:hover:no-underline  ${
          variant === 'fill'
            ? `bg-blue-500 text-white hover:underline disabled:bg-slate-500`
            : variant === 'outline'
            ? `border-slate-800 bg-white hover:underline disabled:text-slate-600`
            : 'hover:bg-slate-100'
        } ${className}`}
        style={
          variant === 'fill'
            ? { backgroundColor: color }
            : variant === 'outline'
            ? { borderColor: color }
            : { color }
        }
        onChange={
          onChange
            ? e => onChange(e as React.ChangeEvent<HTMLSelectElement & { value: T }>)
            : undefined
        }
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
