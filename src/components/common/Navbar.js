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
		<header className='h-14 w-full fixed top-4 z-40 text-[22px]'>
			<nav className="h-full flex flex-col items-center justify-center">
				<div className={`h-full w-[96vw] flex items-center justify-between px-2 pr-6 bg-glass hover:bg-white duration-300 ease-in-out shadow-glass backdrop-blur-glass text-[#2E1B0F] rounded-full ${isMenuOpen ? 'rounded-b-[0px] rounded-t-2xl' : 'rounded-b-full'}`}>
					<div className="h-full font-bold cursor-pointer flex items-center">
						<Link to="/"><img className="h-11 mr-3" src={AGROBOT_ICON} alt="UBC AGROBOT" /></Link>
						<Link to="/" className="font-bold text-[26px]">UBC AGROBOT</Link>
					</div>

					<ul className="list-none lg:flex items-center gap-8 hidden">
						{navLinks.map((e) => (
							<li
								key={e.id}
								className="relative"
								onMouseEnter={() => toggleProjectsMenu(e.dropdown)}
								onMouseLeave={() => toggleProjectsMenu(e.dropdown)}
							>
								<Link
									to={e.link}
									className={`transition-all duration-200 flex items-center ${location.pathname === e.link ? 'font-bold' : ''}`}>
									{e.id} {e.dropdown && <FaChevronDown size='16px' style={{ margin: '3px 0 0 4px' }} />}
								</Link>
								{e.dropdown && isSubMenuOpen && (
									<ul
										className="absolute left-[-32px] px-[32px] pb-[16px] bg-white rounded-2xl pt-1"
										style={{ transition: `all ${dropdown_hover_timing}ms` }}
									>
										{e.dropdown.map((item) => (
											<li key={item.id} className="">
												<Link
													to={item.link}
													className="block py-1 px-0"
												>
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
				</div>

				{/* nav items for small devices */}
				{isMenuOpen && (
					<div className="w-[96vw] bg-white absolute top-full rounded-b-[32px] text-center">
						<Link to="/" className="block">
							Home
						</Link>
						<Link to="/projects" className="block">
							Projects
							<span className='font-normal'>
								<Link to="/agrobot" className="block">AgroBot</Link>
								<Link to="/agroponics" className="block">AgroPonics</Link>
							</span>
						</Link>
						<Link to="/sponsorship" className="block">
							Sponsorship
						</Link>
						<Link to="/recruitment" className="block">
							Recruitment
						</Link>
						<Link to="/contact" className="block">
							Contact
						</Link>
						<Link to="/about" className="block">
							About
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
