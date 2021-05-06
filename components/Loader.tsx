import { FC } from 'react';

interface LoaderProps {
	show: boolean;
}

// Loading Spinner
const Loader: FC<LoaderProps> = ({ show }) => {
	return show ? <div className='loader'></div> : null;
};

export default Loader;
