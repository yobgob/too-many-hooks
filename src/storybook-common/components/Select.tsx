import type { ComponentProps } from 'react';
import type React from 'react'

type OptionValue = React.OptionHTMLAttributes<HTMLOptionElement>['value']

interface Props<T extends OptionValue> extends Omit<ComponentProps<'select'>, 'onChange'> {
  selectRef?: React.Ref<HTMLSelectElement>
  label?: React.ReactNode
  labelDirection?: 'row' | 'column'
  onChange?: React.ChangeEventHandler<HTMLSelectElement & { value: T }>
  options: { value: T; label: string }[]
  variant?: 'fill' | 'outline' | 'text'
  placeholder?: string
  color?: string
}

const Select = <T extends OptionValue>({
  selectRef,
  label,
  labelDirection = 'row',
  onChange,
  options,
  className,
  variant = 'outline',
  color,
  placeholder,
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
        ref={selectRef}
        className={`w-full rounded-md border bg-transparent py-1 pl-1.5 pr-8 disabled:hover:no-underline  ${
          variant === 'fill'
            ? `border-transparent bg-blue-500 text-white  hover:underline disabled:bg-slate-500`
            : variant === 'outline'
              ? `border-slate-800 bg-white hover:underline disabled:text-slate-600`
              : 'border-transparent hover:bg-slate-100'
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
        defaultValue={placeholder}
        {...props}
      >
        {placeholder && <option value={placeholder} label={placeholder} disabled />}
        {options.map(({ value, label }) => (
          <option key={label} value={value} label={label} />
        ))}
      </select>
    </label>
  )
}

export default Select
