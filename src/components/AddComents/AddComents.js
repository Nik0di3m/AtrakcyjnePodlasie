import { StarIcon, UserIcon } from '@heroicons/react/solid'
import React from 'react'

const AddComents = () => {
    return (
        <div className="flex text-white flex-col w-full h-auto space-x-6 py-4 border-b border-secoundDark">
            <div className="flex space-x-3 items-center">
                <div className="bg-secoundDark h-10 w-10 flex items-center justify-center rounded-full">
                    <UserIcon className="h-8" />
                </div>
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="Imię"
                        className="bg-secoundDark rounded-full text-white text-lg outline-none px-3"
                    />
                    <div className="flex text-starColor">
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full px-7 mt-2">
                <textarea
                    placeholder="Komentarz..."
                    className="rounded-xl w-full h-40 resize-none p-3 bg-secoundDark outline-none"
                ></textarea>
                <div className="flex mt-2">
                    <button className="w-44 h-12 rounded-2xl bg-secoundDark">
                        <span>Dodaj komentarz</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddComents
