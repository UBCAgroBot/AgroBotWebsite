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

	return (
		<header className='w-full h-14 top-4 z-40 fixed text-[22px]'>

			<nav className='w-[96%] mx-auto h-full flex items-center justify-between px-2 pr-6 bg-glass hover:bg-white duration-300 ease-in-out shadow-glass backdrop-blur-glass text-[#2E1B0F] rounded-full'>
				<div className="h-full font-bold cursor-pointer flex items-center">
					<Link to="/"><img className="h-11 mr-3" src={AGROBOT_ICON} alt="UBC AGROBOT" /></Link>
					<Link to="/" className="font-bold text-[26px]">UBC AGROBOT</Link>
				</div>

				<ul className="list-none hidden lg:flex items-center gap-8">
					{navLinks.map((e) => (
						<li
							key={e.id}
							className="relative"
							onMouseEnter={() => toggleProjectsMenu(e.dropdown)}
							onMouseLeave={() => toggleProjectsMenu(e.dropdown)}
						>
							<Link to={e.link} className={`transition-all duration-200 flex items-center ${location.pathname === e.link ? 'font-bold' : ''}`}>
								{e.id} {e.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
							</Link>
							{e.dropdown && isSubMenuOpen && (
								<ul className="absolute left-[-32px] px-[32px] pb-[16px] bg-white rounded-2xl pt-1" style={{ transition: `all ${dropdown_hover_timing}ms` }} >
									{e.dropdown.map((item) => (
										<li key={item.id} className="">
											<Link to={item.link} className="block py-1 px-0">
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
					className="lg:hidden text-black text-3xl "
				>
					<HiOutlineMenu />
				</button>
			</nav>

			{/* nav items for small devices */}
			{isMenuOpen && (
				<ul className="lg:hidden w-[96%] mx-auto mt-2 z-[100] text-center bg-white rounded-[46px] my-1 p-3">
					{navLinks.map((value, index) => (
						<>
							{value.dropdown ?
								<>
									{value.dropdown.map((item) => (
										<li key={item.id} className=" rounded-full my-1 p-3">
											<Link to={item.link} onClick={toggleMobileMenu}>
												{item.id}
											</Link>
										</li>
									))}
								</>
								:
								<li key={index.id} className="rounded-full my-1 p-3">
									<Link to={value.link} onClick={toggleMobileMenu}>
										{value.id}
									</Link>
								</li>
							}
						</>
					))}
				</ul>
			)}
		</header>
	);
};

export default Navbar;
