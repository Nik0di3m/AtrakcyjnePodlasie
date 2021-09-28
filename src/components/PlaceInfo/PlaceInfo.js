import React, { useState } from 'react'
import { data } from '../../data'
import { StarIcon } from '@heroicons/react/solid'
import Coments from '../Coments/Coments'
import AddComents from '../AddComents/AddComents'
const PlaceInfo = ({ isShow, id }) => {
    const { image, title } = data[id]

    return (
        <>
            {isShow && (
                <div className="absolute scrollbar scrollbar-thin scrollbar-track-transparent  overflow-y-scroll top-32 left-14 w-1/3 h-4/5 bg-primary rounded-xl shadow-lg p-6 flex flex-col z-50">
                    <div className="w-full h-96">
                        <img
                            src={image[0] || data[id].image}
                            alt="coś tam"
                            className="rounded-xl object-fill w-full h-full shadow-md"
                        />
                    </div>
                    <div className="flex justify-between mt-2">
                        <div className="w-1/3 h-32 m-2 rounded-xl bg-gray-900">
                            <img
                                src={image[1]}
                                alt=""
                                className="object-cover w-full h-full rounded-xl shadow-md"
                            />
                        </div>
                        <div className="w-1/3 h-32 m-2 rounded-xl bg-gray-900">
                            <img
                                src={image[2]}
                                alt=""
                                className="object-cover w-full h-full rounded-xl shadow-md"
                            />
                        </div>
                        <div className="w-1/3 h-32 m-2 rounded-xl bg-gray-900">
                            <img
                                src={image[3]}
                                alt=""
                                className="object-cover w-full h-full rounded-xl shadow-md"
                            />
                        </div>
                    </div>
                    <div className="text-white mt-8">
                        <h1 className="text-2xl">
                            {title}
                            <div className="flex space-x-1 mt-1">
                                <StarIcon className="h-4" />
                                <StarIcon className="h-4" />
                                <StarIcon className="h-4" />
                                <StarIcon className="h-4" />
                                <StarIcon className="h-4" />
                            </div>
                        </h1>
                        <p className="mt-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Adipisci eos, saepe veniam consequatur enim
                            quod nostrum omnis aspernatur! Sequi voluptatibus
                            earum, temporibus consectetur inventore veritatis
                            architecto quam sed placeat blanditiis?
                        </p>
                    </div>
                    <div className="py-6">
                        <Coments />
                        <Coments />
                        <Coments />
                    </div>
                    <div>
                        <AddComents />
                    </div>
                </div>
            )}
        </>
    )
}

export default PlaceInfo
