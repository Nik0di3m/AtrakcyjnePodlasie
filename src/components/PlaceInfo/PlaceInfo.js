import React, { useState } from 'react'

const PlaceInfo = ({ isShow, image }) => {
    return (
        <>
            {isShow && (
                <div className="absolute top-32 left-14 w-1/3 h-4/5 bg-primary rounded-xl shadow-lg p-6 flex flex-col z-50">
                    <div className="w-full">
                        <img
                            src={image}
                            alt="coś tam"
                            className="rounded-xl shadow-md"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default PlaceInfo
