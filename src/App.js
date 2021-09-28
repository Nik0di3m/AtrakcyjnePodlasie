import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import Menu from './components/Menu/Menu'
import PlaceInfo from './components/PlaceInfo/PlaceInfo'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { data } from './data'
const App = () => {
    const [selectionLocation, setSelectionLocation] = useState({
        long: 0,
    })

    const [isShow, setActive] = useState(false)

    const cord = data.map((item) => ({
        longitude: item.longitude,
        latitude: item.latitude,
    }))

    const center = getCenter(cord)

    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
    })

    const handleClick = (item) => {
        console.log(selectionLocation.long)
        setSelectionLocation({ long: item.longitude })
        setActive(true)
        console.log(isShow)
        console.log(center.longitude)
    }
    const handleClose = () => {
        setSelectionLocation({})
        setActive(false)
    }

    return (
        <div className="h-screen w-screen relative">
            <ReactMapGL
                mapStyle="mapbox://styles/nik0d3m/cku31zlr008rc19rz2k60dap6"
                mapboxApiAccessToken="pk.eyJ1IjoibmlrMGQzbSIsImEiOiJja3NkM2RmaDEwNWFuMm9udXY2aDR5d285In0.MqjK5QGgMuIbeMG_iknvyw"
                {...viewPort}
                onViewportChange={(nextViewport) => setViewPort(nextViewport)}
            >
                {data.map((item) => (
                    <div key={item.latitude}>
                        <Marker
                            longitude={item.longitude}
                            latitude={item.latitude}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <LocationMarkerIcon
                                onClick={() => handleClick(item)}
                                className="h-6 text-marker cursor-pointer hover:animate-bounce"
                            />
                        </Marker>
                        {selectionLocation.long === item.longitude ? (
                            <>
                                <Popup
                                    onClose={handleClose}
                                    closeOnClick={true}
                                    latitude={item.latitude}
                                    longitude={item.longitude}
                                    className="rounded-2xl"
                                >
                                    <div className="flex p-4">
                                        <div className="w-44 h-auto relative">
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="object-cover rounded-xl"
                                            />
                                        </div>
                                        <div className="px-5">
                                            <h1 className="text-xl font-semibold text-white">
                                                {item.title}
                                            </h1>
                                        </div>
                                    </div>
                                </Popup>
                                <PlaceInfo isShow={isShow} image={item.image} />
                            </>
                        ) : (
                            false
                        )}
                    </div>
                ))}
            </ReactMapGL>
            <Menu />
        </div>
    )
}

export default App
