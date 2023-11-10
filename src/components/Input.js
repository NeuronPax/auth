import {useIcons} from '../hooks/Icons'
import {forwardRef} from 'react'

const Input = forwardRef(({label, icon, error, ...props}, ref) => {
	const icons = useIcons()
	return (
		<div>
			<label htmlFor={props.type} className='text-sm font-medium'>
				{label}
			</label>
			<div className='relative flex items-center shadow-sm mt-1'>
				{icon(`absolute ${!error ? 'text-gray-400' : 'text-red-400'} h-5 pl-3`)}
				<input
					{...props}
          ref={ref}
					id={props.type}
					className={`${error && 'input_error'} w-full pl-10`}
				/>
				{error && icons.validError('absolute text-red-500 h-5 right-0 pr-3')}
			</div>
			<span className='block text-sm text-red-600 mt-1'>{error}</span>
		</div>
	)
})

export default Input
