import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  return (
    
   
<section>
	<div class="bg-black text-white py-5">
		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 class="text-3xl md:text-5xl  text-yellow-300 tracking-loose">Environnement</h1>
				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-1">the changed that we have..
				</h2>
				<p class="text-sm md:text-base text-gray-50 mb-4">Lets Decode .....</p>
				<a href="#"
					class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Explore Now</a>
			</div>
			<div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div class="h-48 flex flex-wrap content-center">
					<div>
						<img data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-in-out" className="inline-block mt-36 hidden bg-cover rounded-lg xl:block align-baseline" src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" /></div>
						<div>
							<img data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"   data-aos-easing="ease-in-out" class="inline-block mt-36 hidden bg-cover rounded-lg xl:block m-5"  src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" /></div>
							<div>
								<img  data-aos-duration="1000" data-aos="fade-down"  data-aos-delay="300"  data-aos-easing="ease-in-out" class="inline-block mt-36 hidden bg-cover rounded-lg xl:block" src="https://images.unsplash.com/photo-1599148401005-fe6d7497cb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" /></div>
							</div>
						</div>
					</div>
				</div>
</section>
  )
}

export default Hero