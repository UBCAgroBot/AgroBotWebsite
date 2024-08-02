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
		<header className='h-14 w-full fixed top-4 z-40 text-[22px]'>
			<nav className="h-full flex flex-col items-center justify-center">
				<div className={`h-full w-[96vw] flex items-center justify-between px-2 pr-6 bg-glass hover:bg-white duration-300 ease-in-out shadow-glass backdrop-blur-glass text-[#2E1B0F] rounded-full ${isMenuOpen ? 'rounded-b-[0px] rounded-t-2xl' : 'rounded-b-full'}`}>
					<div className="h-full font-bold cursor-pointer flex items-center">
						<a href="/"><img className="h-11 mr-3" src={AGROBOT_ICON} alt="UBC AGROBOT" /></a>
						<a href="/" className="font-bold text-[26px]">UBC AGROBOT</a>
					</div>

					<ul className="list-none lg:flex items-center gap-8 hidden">
						{navLinks.map((e) => (
							<li
								key={e.id}
								className="relative"
								onMouseEnter={() => toggleProjectsMenu(e.dropdown)}
								onMouseLeave={() => toggleProjectsMenu(e.dropdown)}
							>
								<a
									href={e.link}
									className={`transition-all duration-200 flex items-center ${location.pathname === e.link ? 'font-bold' : ''}`}>
									{e.id} {e.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
								</a>
								{e.dropdown && isSubMenuOpen && (
									<ul
										className="absolute left-[-32px] px-[32px] pb-[16px] bg-white rounded-2xl pt-1"
										style={{ transition: `all ${dropdown_hover_timing}ms` }}
									>
										{e.dropdown.map((item) => (
											<li key={item.id} className="">
												<a
													href={item.link}
													className="block py-1 px-0"
												>
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
				</div>

				{/* nav items for small devices */}
				{isMenuOpen && (
					<div className="w-[96vw] bg-white absolute top-full rounded-b-[32px] text-center">
						<a href="/" className="block">
							Home
						</a>
						<a href="/projects" className="block">
							Projects
							<span className='font-normal'>
								<a href="/agrobot" className="block">AgroBot</a>
								<a href="/agroponics" className="block">AgroPonics</a>
							</span>
						</a>
						<a href="/sponsorship" className="block">
							Sponsorship
						</a>
						<a href="/recruitment" className="block">
							Recruitment
						</a>
						<a href="/contact" className="block">
							Contact
						</a>
						<a href="/about" className="block">
							About
						</a>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
