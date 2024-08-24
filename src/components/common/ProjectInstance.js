import React from "react";

function ProjectInstance(props) {
    const { children, projectNum, text, img} = props;

	return (
		<div className='m-auto my-[10%] w-[80%]'>
			<section className="flex flex-col md:flex-row">
				<div className='w-full text-[22px] md:w-[45%] md:text-justify'>
					<div className="">
						<h1 className="text-[24px] font-bold text-[#88BE22]">PROJECT_{projectNum}</h1>
						<h2 className="text-[60px] leading-[1.1]">{children}</h2>
					</div>
					<p className="mt-6">
                        {text}
					</p>
				</div>
				<div className="mt-5 pt-5 md:ml-[5%] md:flex md:w-[50%] md:items-center md:justify-end md:p-10">
					<img src={img} alt="Hydroponics System" className="w-full rounded-[20px] bg-[#d8d4dc] shadow-2xl" />
				</div>
			</section>
		</div>
	);
};

export default ProjectInstance;