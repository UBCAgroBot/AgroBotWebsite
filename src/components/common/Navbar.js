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
		<header className='h-16 w-full fixed top-8 z-40'>
			<nav className="h-full flex items-center justify-center">
				<div className="h-full w-[96%] flex items-center justify-between px-2 pr-6 bg-glass hover:bg-white duration-300 ease-in-out shadow-glass backdrop-blur-glass rounded-full text-[#2E1B0F]">
					<div className="h-full font-bold cursor-pointer flex items-center">
						<a href="/"><img className="h-12 mr-3" src={AGROBOT_ICON} alt="UBC AGROBOT" /></a>
						<a href="/" className="font-bold text-[32px]">UBC AGROBOT</a>
					</div>

					<ul className="list-none lg:flex items-center gap-8 hidden text-[24px]">
						{navLinks.map((e) => (
							<li
								key={e.id}
								className="relative"
								onMouseEnter={() => toggleProjectsMenu(e.dropdown)}
								onMouseLeave={() => toggleProjectsMenu(e.dropdown)}
							>
								<a
									href={e.link}
									className={`transition-all duration-200 flex items-center ${location.pathname === e.link ? 'font-bold' : ''
										}`}
								>
									{e.id} {e.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
								</a>
								{e.dropdown && isSubMenuOpen && (
									<ul
										className="absolute top-full left-[-40px] px-[40px] pb-[20px] bg-white rounded"
										style={{ transition: `all ${dropdown_hover_timing}ms` }}
									>
										{e.dropdown.map((item) => (
											<li key={item.id}>
												<a
													href={item.link}
													className="block text-[#291305] py-[2px] px-0"
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
						className="lg:hidden text-[#8cbc24] text-3xl "
					>
						<HiOutlineMenu />
					</button>
				</div>

				{/* nav items for small devices */}
				{isMenuOpen && (
					<div className="w-full bg-[#F8F7F1] text-[#8cbc24] text-lg font-bold rounded py-4">
						<a href="/" className="block hover:text-grey-400 my-2 mx-4">
							Home
						</a>
						<a href="/projects" className="block hover:text-grey-400 my-2 mx-4">
							Projects
							<span className='font-normal'>
								<a href="/agrobot" className="block hover:text-grey-400 my-2 mx-4">AgroBot</a>
								<a href="/agroponics" className="block hover:text-grey-400 my-2 mx-4">AgroPonics</a>
							</span>
						</a>
						<a href="/sponsorship" className="block hover:text-grey-400 my-2 mx-4">
							Sponsorship
						</a>
						<a href="/recruitment" className="block hover:text-grey-400 my-2 mx-4">
							Recruitment
						</a>
						<a href="/contact" className="block hover:text-grey-400 my-2 mx-4">
							Contact
						</a>
						<a href="/about" className="block hover:text-grey-400 my-2 mx-4">
							About
						</a>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
