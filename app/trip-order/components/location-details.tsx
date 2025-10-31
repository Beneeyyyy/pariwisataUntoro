import { MapPinIcon } from '@heroicons/react/24/outline';

interface UMKM {
    name: string;
    type: string;
    rating: number;
    distance: string;
}

interface LocationDetailsProps {
    name: string;
    description: string;
    time: string;
    attractions: string[];
    umkm: UMKM[];
}

export default function LocationDetails({ 
    name, 
    description, 
    time, 
    attractions, 
    umkm 
}: LocationDetailsProps) {
    return (
        <div className="space-y-6">
            {/* Location Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{name}</h3>
                        <p className="text-slate-600 text-sm mb-4">{description}</p>
                        
                        <div className="flex items-center text-sm text-slate-500">
                            <MapPinIcon className="h-4 w-4 mr-1" />
                            <span>{time} WIB</span>
                        </div>
                    </div>
                </div>

                {/* Attractions */}
                {attractions && attractions.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Tempat Wisata:</h4>
                        <div className="flex flex-wrap gap-2">
                            {attractions.map((attraction, idx) => (
                                <span 
                                    key={idx} 
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                    {attraction}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* UMKM List */}
            {umkm && umkm.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">UMKM Sekitar</h3>
                    <div className="space-y-3">
                        {umkm.map((umkmItem, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-lg p-3 hover:bg-slate-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-medium text-slate-900">{umkmItem.name}</h4>
                                    <div className="flex items-center text-xs text-yellow-600">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        {umkmItem.rating}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                        {umkmItem.type}
                                    </span>
                                    <span className="text-xs text-slate-500">{umkmItem.distance}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
