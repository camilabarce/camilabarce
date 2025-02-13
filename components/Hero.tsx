import { IoDownloadOutline } from 'react-icons/io5'
import MagicButton from './ui/MagicButton'
import { ShootingStars } from './ui/ShootingStars'
import { Spotlight } from './ui/Spotlight'
import { StarsBackground } from './ui/StarsBackground'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <ShootingStars />
        <StarsBackground />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <TextGenerateEffect 
            className='text-center text-[45px] md:text-5xl lg:text-6xl'
            words='Camila Arce'
          />

          <TextGenerateEffect
            className='text-center text-[20px] md:text-2xl lg:text-3xl'
            words='Desarrolladora Web Frontend'
          />

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Me apasiona hacer aplicaciones web útiles e intuitivas
          </p>

          <a href='' target='_blank'>
            <MagicButton 
              title='Descargar CV'
              icon={<IoDownloadOutline />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero