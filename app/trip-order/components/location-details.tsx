import { MapPinIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import LocationDetailModal from './location-detail-modal';
import { getLocationDetails } from '../data/locations';

interface LocationDetailsProps {
    name: string;
    description: string;
    time: string;
    attractions: string[];
    getLocationImage: (name: string) => string;
    getLocationHistory: (name: string) => string;
    getLocationActivities: (name: string) => string[];
}

export default function LocationDetails({ 
    name, 
    description, 
    time, 
    attractions,
    getLocationImage,
    getLocationHistory,
    getLocationActivities
}: LocationDetailsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Try to get location details, but don't fail if not found
    const locationDetails = getLocationDetails(name.toLowerCase().replace(/\s+/g, '-'));
    
    return (
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-200/70 p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <div className="p-6 border-b border-blue-100">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-blue-900">Detail Lokasi</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {time} WIB
                    </span>
                </div>
            </div>

            {/* Location Image - Always Show */}
            <div className="relative h-72 w-full bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden group">
                <img
                    src={getLocationImage(name)}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Fallback to a reliable image source
                        target.src = `https://picsum.photos/800/600?random=${name.length}`;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-2xl font-bold mb-2 drop-shadow-lg">{name}</h4>
                    <p className="text-sm opacity-95 leading-relaxed drop-shadow-md">{description}</p>
                </div>
                {/* Elegant corner accent */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full shadow-sm ring-2 ring-blue-200 group-hover:animate-pulse"></div>
            </div>

            <div className="p-6 space-y-8">
                {/* History */}
                <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl p-5 border border-blue-100 hover:shadow-sm transition-all duration-300">
                    <h5 className="text-sm font-semibold text-blue-800 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        SEJARAH
                    </h5>
                    <p className="text-sm text-slate-700 leading-relaxed">
                        {getLocationHistory(name)}
                    </p>
                </div>

                {/* Attractions */}
                {attractions && attractions.length > 0 && (
                    <div>
                        <h5 className="text-sm font-semibold text-blue-800 mb-4 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            TEMPAT WISATA
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {attractions.map((attraction, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center p-3 bg-blue-50/70 backdrop-blur-sm rounded-lg border border-blue-100 hover:shadow-sm hover:border-blue-200 transition-all duration-300 group hover:bg-blue-50/50"
                                >
                                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                                    <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 transition-colors">{attraction}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Activities */}
                <div>
                    <h5 className="text-sm font-semibold text-blue-800 mb-4 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        AKTIVITAS
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {getLocationActivities(name).map((activity, idx) => (
                            <div
                                key={idx}
                                className="flex items-center p-3 bg-blue-50/90 backdrop-blur-sm rounded-lg border border-blue-100 hover:shadow-sm hover:border-blue-200 transition-all duration-300 group"
                            >
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></div>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700 transition-colors">{activity}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visit Time */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100/90 rounded-xl p-5 border border-blue-200/80 hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                            <span className="text-sm font-semibold text-blue-800">WAKTU KUNJUNGAN</span>
                        </div>
                        <span className="text-lg text-blue-700 font-bold">{time} WIB</span>
                    </div>
                </div>

                {/* Lihat Detail Button - Only show if we have location details */}
                {locationDetails && (
                    <button 
                        className="w-full mt-6 py-3.5 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <MapPinIcon className="w-4 h-4" />
                        Lihat Detail Lengkap
                    </button>
                )}

                {locationDetails && (
                    <LocationDetailModal 
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        location={locationDetails}
                    />
                )}
            </div>
        </div>
    );
}
