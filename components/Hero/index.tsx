"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/components'

type Props = {}

const Hero = (props: Props) => {
    const handleScroll = () => {

    }

  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, book or rent a car -- quickly and easily!
            </h1>

            <p className="hero__subtitle">
                Streamline your car rental experience with our eforts booking process.
            </p>

            <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
             />
        </div>
    </div>
  )
}

export default Hero
