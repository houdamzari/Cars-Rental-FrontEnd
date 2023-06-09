import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaTimes, FaPinterestP } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import Wrapper from '../../assets/Wrappers/SmallSidebar';
import NavLinks from '../Navlinks/NavLinks';
import Logo from '../../assets/logo.png';
import { toast } from 'react-toastify';
import { logoutUser } from '../../redux/slices/userSlice';

const SmallSidebar = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	const dispatch = useDispatch();

	const handleToggleSidebar = () => {
		setShowSidebar(true);
	};

	const handleCloseSidebar = () => {
		setShowSidebar(false);
	};

	const handleLinkClick = () => {
		setShowSidebar(false);
	};

	const handleLogout = () => {
		setTimeout(() => {
			dispatch(logoutUser());
		}, 1000);
		toast.success('Logout Successful!');
	};

	return (
		<Wrapper>
			<button
				type="button"
				className="toggle-btn"
				onClick={handleToggleSidebar}
			>
				<AiOutlineMenu />
			</button>
			<div className={`sidebar-container ${showSidebar ? 'show-sidebar' : ''}`}>
				<div className="content">
					<button className="close-btn" onClick={handleCloseSidebar}>
						<FaTimes />
					</button>
					<header>
						<img src={Logo} alt="logo" className="logo" />
					</header>
					<NavLinks onClick={handleLinkClick} />
					<button
						type="button"
						onClick={handleLogout}
						className="btn btn-outline-danger px-3 w-50 mt-3"
					>
						Logout
					</button>
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
