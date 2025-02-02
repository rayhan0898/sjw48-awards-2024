import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative z-0 flex items-center 
            justify-center 
            h-[541px] 
            2xs:h-[320px]
            xs:h-[480px]
            sm:h-[234px] 
            md:h-[380px] 
            lg:h-[541px] 
            xl:h-[541px] 
            text-white bg-white text-center p-8 overflow-hidden">
            {/* Background Image */}
            <Image 
                fill={true}
                src="/images/banner/banner-desktop.webp" // URL gambar latar belakang
                alt="Background"
                className="absolute inset-0 
                w-full h-full
                2xs:invisible
                xs:invisible
                sm:visible
                md:visible
                lg:visible
                "
            />

            {/* Banner Mobile */}
            <Image 
                fill={true}
                src="/images/banner/banner-mobile.webp"
                alt="Background"
                className="absolute 
                    inset-0 
                    w-full h-full
                    xs:visible
                    2xs:visible
                    sm:invisible
                    md:invisible
                    lg:invisible"
            />

            {/* Banner Content */}
            {/* <div className="relative z-10 mt-96">
                <h1 className="text-4xl font-bold mb-4 text-black">
                    THE CHANGE IS NOW
                </h1>
            </div> */}
        </div>
    )
}

export default Banner