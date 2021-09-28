import React from 'react'
import { UserIcon, StarIcon } from '@heroicons/react/solid'
const Coments = () => {
    return (
        <div className="flex text-white flex-col w-full h-auto space-x-6 py-4 border-b border-secoundDark">
            <div className="flex space-x-3">
                <div className="bg-secoundDark h-10 w-10 flex items-center justify-center rounded-full">
                    <UserIcon className="h-8" />
                </div>
                <div>
                    <h2 className="text-lg font-medium">Jan Kowalski</h2>
                    <div className="flex text-starColor">
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                        <StarIcon className="h-4" />
                    </div>
                </div>
            </div>
            <div className="pl-7">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    qui aspernatur veritatis enim culpa quibusdam in.
                    Praesentium, delectus, voluptatum asperiores exercitationem
                    ex adipisci possimus debitis sed voluptate quidem tempore
                    rerum.
                </p>
            </div>
        </div>
    )
}

export default Coments
