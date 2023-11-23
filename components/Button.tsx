import React from 'react'

type ButtonProps = {
    title: string;
};

function Button({ title }: ButtonProps) {
  return (
    <button
        type='submit'
        className='px-4 sm:px-8 py-2 rounded-md bg-primary text-white sm:text-lg shadow-md opacity-80 hover:bg-pink1 duration-200 transition-colors'
    >{title}</button>
  )
}

export default Button