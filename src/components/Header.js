import {useIcons} from '../hooks/Icons'
import {useAuth} from '../hooks/Auth'

const Header = () => {
	const icons = useIcons()
  const {user, logOut} = useAuth()
	return (
		<div className='flex justify-between items-center shadow-xl p-6'>
			<a href='/' className='flex items-center gap-2 outline-none'>
				{icons.logo('text-blue-500 h-10')}
				<span className='text-xl font-black'>Security</span>
			</a>
      <div className='flex gap-4'>
        {user ? (
          <>
            <button>{user}</button>
            <button onClick={logOut}>Log Out</button>
          </>
        ) : (
          <>
            <button>Sign In</button>
            <button>Sign Up</button>
          </>
        )}
      </div>
		</div>
	)
}

export default Header
