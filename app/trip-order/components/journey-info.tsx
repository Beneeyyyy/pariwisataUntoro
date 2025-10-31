'use client';

import { useState } from 'react';
import { ClockIcon, TruckIcon, ChevronDownIcon, ChevronUpIcon, PhotoIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface LocationDetail {
    name: string;
    description: string;
    image: string;
    time: string;
    attractions: string[];
    history: string;
    activities: string[];
    coordinates: [number, number];
}

interface JourneyInfoProps {
    estimatedArrival: string;
    currentProgress: number;
    totalPoints: number;
    currentLocation?: LocationDetail;
}

export default function JourneyInfo({
    estimatedArrival,
    currentProgress,
    totalPoints,
    currentLocation
}: JourneyInfoProps) {
    const [showDetails, setShowDetails] = useState(false);

    const getLocationImage = (locationName: string): string => {
        const imageMap: { [key: string]: string } = {
            'Yogyakarta': 'https://images.unsplash.com/photo-1555400082-8c5cd5b3c3d1?w=400&h=250&fit=crop&auto=format',
            'Borobudur Temple': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format',
            'Malang': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format',
            'Banyuwangi': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format',
            'Denpasar': 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop&auto=format',
            'Sanur Beach': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop&auto=format',
            'Garuda Wisnu Kencana': 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=250&fit=crop&auto=format'
        };
        return imageMap[locationName] || 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format';
    };

    const defaultLocation: LocationDetail = {
        name: "Candi Borobudur",
        description: "Candi Buddha terbesar di dunia dan warisan dunia UNESCO",
        image: getLocationImage("Borobudur Temple"),
        time: "09:30",
        attractions: ["Candi Borobudur", "Museum Borobudur", "Taman Lumbini"],
        history: "Dibangun pada abad ke-8 dan ke-9 Masehi selama masa pemerintahan Dinasti Syailendra. Candi ini merupakan monumen Buddha terbesar di dunia dan menjadi salah satu keajaiban dunia.",
        activities: ["Sunrise Tour", "Photography", "Cultural Learning", "Meditation"],
        coordinates: [-7.6079, 110.2038]
    };

    const location = currentLocation || defaultLocation;

    return (
        <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden">
            {/* Main Journey Info */}
            <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Informasi Perjalanan</h2>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="bg-emerald-100 p-2 rounded-full mr-3">
                            <TruckIcon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Titik Saat Ini</p>
                            <p className="font-medium">{currentProgress} dari {totalPoints} titik</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="bg-emerald-100 p-2 rounded-full mr-3">
                            <ClockIcon className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500">Perkiraan Sampai</p>
                            <p className="font-medium">{estimatedArrival} WIB</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(currentProgress / totalPoints) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Current Location Button */}
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full mt-4 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-between"
                >
                    <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-emerald-600 mr-2" />
                        <span className="font-medium text-slate-900">Lokasi Saat Ini: {location.name}</span>
                    </div>
                    {showDetails ? (
                        <ChevronUpIcon className="h-5 w-5 text-slate-400" />
                    ) : (
                        <ChevronDownIcon className="h-5 w-5 text-slate-400" />
                    )}
                </button>
            </div>

            {/* Detailed Location Info */}
            {showDetails && (
                <div className="border-t border-slate-200 p-6 bg-slate-50">
                    <div className="space-y-6">
                        {/* Location Image */}
                        <div className="relative rounded-xl overflow-hidden bg-gray-200">
                            <img
                                src={getLocationImage(location.name)}
                                alt={location.name}
                                className="w-full h-48 object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold">{location.name}</h3>
                                <p className="text-sm opacity-90">{location.description}</p>
                            </div>
                        </div>

                        {/* History */}
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Sejarah</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{location.history}</p>
                        </div>

                        {/* Attractions */}
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Tempat Wisata</h4>
                            <div className="flex flex-wrap gap-2">
                                {location.attractions.map((attraction, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                                    >
                                        {attraction}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Activities */}
                        <div>
                            <h4 className="text-sm font-semibold text-slate-900 mb-2">Aktivitas</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {location.activities.map((activity, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center p-2 bg-white rounded-lg border border-slate-200"
                                    >
                                        <PhotoIcon className="h-4 w-4 text-emerald-600 mr-2" />
                                        <span className="text-xs text-slate-700">{activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visit Time */}
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                            <span className="text-sm font-medium text-slate-900">Waktu Kunjungan</span>
                            <span className="text-sm text-emerald-600 font-medium">{location.time} WIB</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
