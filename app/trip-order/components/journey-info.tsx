'use client';

import { useState, useEffect } from 'react';
import { ClockIcon, TruckIcon, PhotoIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface LocationData {
    name: string;
    description: string;
    image: string;
    time: string;
    attractions: string[];
    history: string;
    activities: string[];
    coordinates: [number, number];
}

type LocationDetail = LocationData; // Alias untuk kompatibilitas

interface JourneyInfoProps {
    estimatedArrival: string;
    currentProgress: number;
    totalPoints: number;
    currentLocation?: LocationDetail;
}

// Sample location data
const locationData: Record<string, LocationData> = {
    'Borobudur Temple': {
        name: 'Borobudur Temple',
        description: 'Candi Buddha terbesar di dunia, warisan UNESCO',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop&auto=format',
        time: '09:15',
        attractions: ['Candi Borobudur', 'Museum Borobudur', 'Sunrise Point'],
        history: 'Dibangun pada abad ke-9 pada masa pemerintahan Dinasti Syailendra',
        activities: ['Sunrise Tour', 'Fotografi', 'Belajar Sejarah'],
        coordinates: [-7.6079, 110.2038]
    },
    'Prambanan Temple': {
        name: 'Prambanan Temple',
        description: 'Kompleks candi Hindu terbesar di Indonesia',
        image: 'https://images.unsplash.com/photo-1588666305402-8ae247b9ecc8?w=800&h=500&fit=crop&auto=format',
        time: '08:30',
        attractions: ['Candi Siwa', 'Candi Brahma', 'Candi Wisnu'],
        history: 'Dibangun pada abad ke-9 oleh Wangsa Sanjaya',
        activities: ['Menyaksikan Sendratari Ramayana', 'Fotografi'],
        coordinates: [-7.7520, 110.4915]
    }
};

export default function JourneyInfo({
    estimatedArrival,
    currentProgress,
    totalPoints,
    currentLocation
}: JourneyInfoProps) {
    const [activeLocation, setActiveLocation] = useState<LocationData>(locationData['Borobudur Temple']);

    // Update active location when currentLocation prop changes
    useEffect(() => {
        if (currentLocation) {
            setActiveLocation(currentLocation);
        } else {
            setActiveLocation(locationData['Borobudur Temple']);
        }
    }, [currentLocation]);

    const getLocationImage = (locationName: string): string => {
        return locationData[locationName]?.image || 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&auto=format';
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Main Journey Info */}
            <div className="p-4">
                <h2 className="text-lg font-bold text-slate-900 mb-3">Informasi Perjalanan</h2>

                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="bg-emerald-100 p-1.5 rounded-lg mr-2">
                                <TruckIcon className="h-4 w-4 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Titik Saat Ini</p>
                                <p className="text-sm font-medium">{currentProgress} dari {totalPoints}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-emerald-100 p-1.5 rounded-lg mr-2">
                                <ClockIcon className="h-4 w-4 text-emerald-600" />
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500">ETA</p>
                                <p className="text-sm font-medium">{estimatedArrival}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <div className="w-full bg-slate-200 rounded-full h-3 shadow-inner">
                            <div
                                className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500 shadow-lg animate-pulse-glow"
                                style={{ width: `${(currentProgress / totalPoints) * 100}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 mt-1">
                            <span>Progress</span>
                            <span>{Math.round((currentProgress / totalPoints) * 100)}%</span>
                        </div>
                    </div>
                </div>

                {/* Current Location */}
                <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-emerald-600 mr-2" />
                        <div>
                            <p className="font-medium text-slate-900">Lokasi Saat Ini</p>
                            <p className="text-sm text-slate-600">{activeLocation.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
