import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { HiOutlineMenu } from "react-icons/hi";
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
					<a href="/"><img className="h-11 mr-3" src={AGROBOT_ICON} alt="UBC AGROBOT" /></a>
					<a href="/" className="font-bold text-[26px]">UBC AGROBOT</a>
				</div>

				<ul className="list-none hidden lg:flex items-center gap-8">
					{navLinks.map((e) => (
						<li
							key={e.id}
							className="relative"
							onMouseEnter={() => toggleProjectsMenu(e.dropdown)}
							onMouseLeave={() => toggleProjectsMenu(e.dropdown)}
						>
							<a href={e.link} className={`transition-all duration-200 flex items-center ${location.pathname === e.link ? 'font-bold' : ''}`}>
								{e.id} {e.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
							</a>
							{e.dropdown && isSubMenuOpen && (
								<ul className="absolute left-[-32px] px-[32px] pb-[16px] bg-white rounded-2xl pt-1" style={{ transition: `all ${dropdown_hover_timing}ms` }} >
									{e.dropdown.map((item) => (
										<li key={item.id} className="">
											<a href={item.link} className="block py-1 px-0">
												{item.id}
											</a>
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
				<ul className="lg:hidden w-[96%] mx-auto mt-2 p-8 bg-white rounded-[40px] z-[100]">
					{navLinks.map((value, index) => (
						<li
							key={index.id}
							className="relative"
							onMouseEnter={() => toggleProjectsMenu(value.dropdown)}
							onMouseLeave={() => toggleProjectsMenu(value.dropdown)}
						>
							{!value.dropdown && <a href={value.link} className={`m-2 p-2 rounded-full transition-all duration-200 flex items-center ${location.pathname === value.link ? 'font-bold' : ''}`}>
								{value.id} {value.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
							</a>}
							{value.dropdown && (
								<ul className=" bg-white rounded-2xl" >
									{value.dropdown.map((item) => (
										<li key={item.id} className="p-2 m-2">
											<a href={item.link} className="">
												{item.id}
											</a>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			)}
		</header>
	);
};

export default Navbar;
