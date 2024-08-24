import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

import { navLinks } from "../../constant";
import { AGROBOT_ICON } from "../../assets";

const Navbar = () => {
	const [isMenuOpen, setMobileMenu] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
	const location = useLocation();

	const dropdown_hover_timing = 0;

	const toggleMobileMenu = () => {
		setMobileMenu(!isMenuOpen);
	};

	function toggleProjectsMenu(hasDropdown) {
		if (hasDropdown)
			setIsSubMenuOpen(!isSubMenuOpen);
	}

	// TODO: Why does the navbar expand and contract the rest of the page when you go up and down
	return (
		<header className='fixed top-4 z-40 h-14 w-full text-[22px]'>

			<nav className='z-[100] mx-auto flex h-full w-[96%] items-center justify-between rounded-full px-2 pr-6 text-[#2E1B0F] duration-300 ease-in-out bg-glass shadow-glass backdrop-blur-glass hover:bg-white'>
				<div className="flex h-full cursor-pointer items-center font-bold">
					<Link to="/"><img className="mr-3 h-11" src={AGROBOT_ICON} alt="UBC AGROBOT" /></Link>
					<Link to="/" className="text-[22px] font-bold lg:text-[26px]">UBC AGROBOT</Link>
				</div>

				<ul className="hidden list-none items-center gap-8 lg:flex">
					{navLinks.map((e) => (
						<li
							key={e.id}
							className="relative"
							onMouseEnter={() => toggleProjectsMenu(e.dropdown)}
							onMouseLeave={() => toggleProjectsMenu(e.dropdown)}
						>
							<Link to={e.link} className={`flex items-center transition-all duration-200 ${location.pathname === e.link ? 'font-bold' : ''}`}>
								{e.id} {e.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
							</Link>
							{e.dropdown && isSubMenuOpen && (
								<ul className="absolute left-[-32px] rounded-2xl bg-white px-[32px] pb-[16px] pt-1" style={{ transition: `all ${dropdown_hover_timing}ms` }} >
									{e.dropdown.map((item) => (
										<li key={item.id} className="">
											<Link to={item.link} className="block px-0 py-1">
												{item.id}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>

				{/* menu button for small devices */}
				<button
					onClick={toggleMobileMenu}
					className="text-3xl text-black lg:hidden "
				>
					<HiOutlineMenu />
				</button>
			</nav>

			{/* nav items for small devices */}
			{isMenuOpen && (
				<div className="fixed left-0 top-0 z-[-5] h-[101vh] w-full bg-[#cdff70]">
					<ul className="mx-auto my-1 mt-20 w-[96%]  p-3 text-center font-medium underline lg:hidden">
						{navLinks.map((value, index) => (
							<>
								{value.dropdown ?
									<>
										{value.dropdown.map((item) => (
											<li key={item.id} className=" my-1 rounded-full p-3">
												<Link to={item.link} onClick={toggleMobileMenu}>
													{item.id}
												</Link>
											</li>
										))}
									</>
									:
									<li key={index.id} className="my-1 rounded-full p-3">
										<Link to={value.link} onClick={toggleMobileMenu}>
											{value.id}
										</Link>
									</li>
								}
							</>
						))}
					</ul>
				</div>
			)}
		</header>
	);
};

export default Navbar;
