import React from 'react'

function InfoSection() {
  return (
    <section className="mt-16">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div className="space-y-4">
                    <div className="max-w-lg md:max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                            FORD RAPTOR NEWS
                        </h2>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                            The Ford Raptor is a high-performance off-road pickup truck that has become a standout in the world of rugged vehicles.
                            It is designed with advanced suspension systems allow it to handle rough terrains with ease.
                            The Raptor is powered by a turbocharged V6 engine, delivering impressive horsepower and torque for both on-road speed and off-road capability.
                            Whether conquering desert dunes or navigating rocky trails, the Ford Raptor is a symbol of strength and adventure in the pickup truck market.
                        </p>
                    </div>
                </div>

                <div>
                    <img
                        src="https://www.ford.co.uk/content/dam/guxeu/rhd/central/cars/2022-ranger-raptor/pre-launch/gallery/exterior/ford-ranger-eu-P703R_005-16x9-2160x1215.jpg.renditions.original.png"
                        className="rounded w-full h-auto object-cover shadow-lg"
                        alt="Ford Raptor"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoSection