import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='text-center hero-content'>
			<div className='max-w lg'>
				<h1 className='text-8xl font-bold mb-8'>Oops!</h1>
				<p className='text-5xl mb-8'>404 Page Not Found</p>
				<Link to='/' className='btn btn-primary brn-lg'>
					<FaHome className='mr-2' />
				</Link>
				Back to Home
			</div>
		</div>
	);
}
