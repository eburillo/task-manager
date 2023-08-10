import { Link } from 'react-router-dom'
import { IHeader } from '../types'

export default function Header({ title, description, hasBackButton }: IHeader) {
  return (
    <header className='py-2 mb-4 h-1/6 flex justify-between'>
      <div>
        <h1 className='text-2xl font-bold mb-3 text-slate-700'>{title}</h1>
        <p className='text-md text-slate-700'>{description}</p>
      </div>
      {hasBackButton && (
        <Link to='/projects'>
          <button className='bg-sky-800 text-white px-3 py-2 rounded-lg mr-5'>
            Back
          </button>
        </Link>
      )}
    </header>
  )
}
