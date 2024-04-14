'use client'

import { YMaps, Map } from '@pbe/react-yandex-maps';


export default function Ymap({ width, height, x_position, y_position, zoom }) {
    return (
        <YMaps>
            <Map className={`w-[${width}] h-[${height}]x`} defaultState={{ center: [x_position, y_position], zoom: zoom }} />
        </YMaps>
    )
}