function AgroponicsMain() {

	return (
		<section className="lg:h-[190vh] w-full bg-black flex flex-col gap-[2rem] justify-start pt-10">
			<div className="w-full h-[60vh] lg:h-[100vh] pt-8 opacity-1">
				<img src='img/AgroponicModel2D.png' />
			</div>
			<div className="w-full h-[60vh] lg:h-[75vh] flex flex-col lg:flex-row ">
				<div className="w-full h-full">
					<div className="justify-center mx-5">
						<h2 className="text-white text-center text-[42px] lg:text-[7rem] font-bold mb-2">AgroPonics</h2>
						<p className="text-white text-center text-[18px] lg:text-[1.25rem]">
							The Agroponics team designs autonomous hydroponic systems through multidisciplinary collaboration. It integrates IoT for automation, structural design for optimized environments, and experimental research on growth of staple foods. The aim is to enhance agricultural efficiency by reducing resource use and improving crop production in a controlled, sustainable setting. If you would like to see some of what we have been working on, see our blog website here!
						</p>
						<div className="flex justify-center mt-2">
						</div>
						<p className="text-white text-center font-bold text-[18px] lg:text-[1.25rem] mt-5 mb-25">
							AgroPonics is a product of collaboration between three different sub-teams, each playing a pivotal role in its development and performance. They have their own website you can check out here:
						</p>
						<a href="https://ubcagroponics.com/" target="_blank" className="rounded-3xl bg-white p-3 mt-3 font-bold justify-center text-black">
							<span className="font-Roboto">Agroponics Website!</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AgroponicsMain;
