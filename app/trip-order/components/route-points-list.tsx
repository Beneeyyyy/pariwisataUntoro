'use client';

import { Fragment } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

interface RoutePoint {
    id: string;
    name: string;
    time: string;
    lat: number;
    lng: number;
    description: string;
    attractions: string[];
    umkm: any[];
}

interface RoutePointsListProps {
    routePoints: RoutePoint[];
    currentPointIndex: number;
    onPointClick: (index: number, point: RoutePoint) => void;
}

export default function RoutePointsList({ 
    routePoints, 
    currentPointIndex, 
    onPointClick 
}: RoutePointsListProps) {
    const handlePointClick = (index: number, point: RoutePoint) => {
        // Call the original click handler
        onPointClick(index, point);
    };

    return (
        <Fragment>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-blue-900">Titik Perjalanan</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full font-medium">
                        {routePoints.length} Lokasi
                    </span>
                </div>

                <div className="space-y-3">
                    {routePoints.map((point, index) => (
                        <div
                            key={index}
                            onClick={() => handlePointClick(index, point)}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all cursor-pointer hover:bg-blue-50/70 hover:border-blue-100 ${
                                index === currentPointIndex
                                    ? 'bg-blue-50 border border-blue-200 shadow-sm'
                                    : index < currentPointIndex
                                    ? 'bg-blue-50/80 border border-blue-100'
                                    : 'bg-white border border-transparent hover:border-blue-100'
                            }`}
                        >
                            <div 
                                className={`w-3 h-3 rounded-full flex-shrink-0 ${
                                    index === currentPointIndex
                                        ? 'bg-blue-600 animate-pulse ring-2 ring-blue-200'
                                        : index < currentPointIndex
                                        ? 'bg-blue-500'
                                        : 'bg-blue-200'
                                }`}
                            />
                            <div className="flex-1">
                                <p 
                                    className={`font-medium ${
                                        index === currentPointIndex ? 'text-blue-900' : 'text-slate-800'
                                    }`}
                                >
                                    {point.name}
                                </p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{point.time} WIB</span>
                                    {point.attractions.length > 0 && (
                                        <span className="text-xs text-blue-800 bg-blue-100/50 px-2 py-0.5 rounded-full flex items-center">
                                            <MapPinIcon className="h-3 w-3 mr-1" />
                                            {point.attractions.length} Tempat
                                        </span>
                                    )}
                                </div>
                            </div>
                            {index === currentPointIndex && (
                                <div className="text-blue-700 text-xs font-medium bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Sedang Dikunjungi</div>
                            )}
                            {index < currentPointIndex && (
                                <div className="text-blue-500 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </Fragment>
    );
}
