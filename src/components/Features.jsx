import React from 'react'


const BentoCard = ({ src, title, description, isComingSoon }) => {
    return (
        <div>
            {title}
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52 '>
        <div className="container mx-auto-px-3 md:px-10">
            <div className="px-5 py-32">
                <p className='font-circular-web text-lg text-blue-50 '>Into the Metagame Layer</p>
            </div>
            <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                Immerse yourself in a rich and ever-expanding universe where a vibrant array of worlds converge into an interconnected experience.
            </p>
        </div>

        <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard
                src='video/feature-1.mp4'
                title={<>radie<b>n</b>t</>}
                discription="A cross-platform metagame app, turning your activities across web2 and web3 games into a rewarding adventure."
                isComingSoon={true}
            />
        </div>
    </section>
  )
}

export default Features