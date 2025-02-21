import { type ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="h-12 bg-gray-500 text-blue px-5 font-semibold rounded-xl w-full cursor-pointer
         hover:bg-blue hover:text-gray-900 transition-colors duration-300 flex items-center justify-between"
      {...props}
    />
  )
}
