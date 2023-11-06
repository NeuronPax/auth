import {useIcons} from '../assets/Icons'

const Header = () => {
	const icons = useIcons()
	return (
		<div className='flex justify-between items-center shadow-xl p-6'>
			<a href='/' className='flex items-center gap-2 outline-none'>
				{icons.logo('text-blue-500 h-10')}
				<span className='text-xl font-black'>Security</span>
			</a>
			<button>Sign Up</button>
		</div>
	)
}

export default Header
