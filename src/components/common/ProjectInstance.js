import React from "react";

function ProjectInstance(props) {
    const { children, projectNum, text, img} = props;

	return (
		<div className='w-[80%] m-auto my-[10%]'>
			<section className="flex flex-col md:flex-row">
				<div className='text-[22px] md:text-justify w-full md:w-[45%]'>
					<div className="">
						<h1 className="text-[24px] font-bold text-[#88BE22]">PROJECT_{projectNum}</h1>
						<h2 className="text-[60px] leading-[1.1]">{children}</h2>
					</div>
					<p className="mt-6">
                        {text}
					</p>
				</div>
				<div className="mt-5 pt-5 md:flex md:justify-end md:items-center md:w-[50%] md:ml-[5%] md:p-10">
					<img src={img} alt="Hydroponics System" className="shadow-2xl rounded-[20px] bg-[#d8d4dc] w-full" />
				</div>
			</section>
		</div>
	);
};

export default ProjectInstance;