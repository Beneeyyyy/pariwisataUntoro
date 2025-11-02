import { useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import UMKMModal, { type UMKMDetail } from './umkm-modal';

// Ekspor tipe UMKM untuk digunakan di komponen lain
export type UMKM = Pick<UMKMDetail, 'name' | 'type' | 'rating' | 'distance'> & {
    description?: string;
    price?: string;
    address?: string;
    phone?: string;
    openHours?: string;
    image?: string;
    specialties?: string[];
    reviews?: Array<{
        user: string;
        rating: number;
        comment: string;
        date: string;
    }>;
    gallery?: string[];
};

interface UMKMModalProps {
    isOpen: boolean;
    onClose: () => void;
    umkm: UMKM | null;
}

interface UMKMCardProps {
    umkm: UMKM;
    onClick: (umkm: UMKM) => void;
}

const UMKMCard = ({ umkm, onClick }: UMKMCardProps) => (
    <div
        onClick={() => onClick(umkm)}
        className="relative bg-white/90 backdrop-blur-sm border border-blue-200/80 rounded-xl p-4 hover:bg-white hover:border-blue-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group overflow-hidden"
    >
        {/* Subtle blue accent on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                    {umkm.name}
                </h4>
                <div className="flex items-center text-xs bg-blue-50 text-blue-800 px-2.5 py-1 rounded-full border border-blue-200 shadow-sm">
                    <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{umkm.rating}</span>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-blue-500/10 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100/50">
                    {umkm.type}
                </span>
                <span className="text-xs text-blue-700/90 bg-blue-50/50 px-2.5 py-1 rounded-full border border-blue-100/50 flex items-center">
                    <MapPinIcon className="h-3 w-3 mr-1 text-blue-400" />
                    {umkm.distance}
                </span>
            </div>
            
            <div className="mt-3 text-xs text-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center font-medium">
                <span>Lihat detail</span>
                <svg className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </div>
    </div>
);

// Fungsi untuk membuat data dummy UMKM yang kompatibel dengan UMKMDetail
const createUMKMDetail = (umkm: UMKM): UMKMDetail => ({
    ...umkm,
    description: umkm.description || `${umkm.name} adalah UMKM yang bergerak di bidang ${umkm.type.toLowerCase()}.`,
    price: umkm.price || 'Rp25.000 - Rp100.000',
    address: umkm.address || 'Jl. Contoh No. 123, Yogyakarta',
    phone: umkm.phone || '(0274) 123456',
    openHours: umkm.openHours || '09:00 - 21:00 WIB',
    image: umkm.image || 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format',
    specialties: umkm.specialties || [umkm.type],
    reviews: umkm.reviews || [
        {
            user: 'Pengunjung',
            rating: umkm.rating,
            comment: 'Tempatnya nyaman dan pelayanannya ramah.',
            date: '2023-01-01'
        }
    ],
    gallery: umkm.gallery || [
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format'
    ]
});

interface UMKMSectionProps {
    umkms: UMKM[];
}

export function UMKMSection({ umkms }: UMKMSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUMKM, setSelectedUMKM] = useState<UMKMDetail | null>(null);

    const handleUMKMClick = (umkm: UMKM) => {
        // Konversi ke format UMKMDetail dengan data default
        const umkmDetail = createUMKMDetail(umkm);
        // Pastikan semua properti yang diperlukan ada
        const completeUMKM: UMKMDetail = {
            ...umkmDetail,
            image: umkmDetail.image || 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format',
            description: umkmDetail.description || `${umkmDetail.name} adalah UMKM yang bergerak di bidang ${umkmDetail.type.toLowerCase()}.`,
            price: umkmDetail.price || 'Rp25.000 - Rp100.000',
            address: umkmDetail.address || 'Jl. Contoh No. 123, Yogyakarta',
            phone: umkmDetail.phone || '(0274) 123456',
            openHours: umkmDetail.openHours || '09:00 - 21:00 WIB',
            specialties: umkmDetail.specialties || [umkmDetail.type],
            reviews: umkmDetail.reviews || [
                {
                    user: 'Pengunjung',
                    rating: umkmDetail.rating,
                    comment: 'Tempatnya nyaman dan pelayanannya ramah.',
                    date: '2023-01-01'
                }
            ],
            gallery: umkmDetail.gallery || [
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&auto=format'
            ]
        };
        setSelectedUMKM(completeUMKM);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUMKM(null);
    };
    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-100/50 p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100/20 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200/20 rounded-full filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                            UMKM Sekitar
                        </h3>
                        <p className="text-xs text-blue-600/70 mt-1">Temukan tempat menarik di sekitar lokasi Anda</p>
                    </div>
                    <span className="text-xs bg-blue-500/10 text-blue-800 px-3 py-1.5 rounded-full border border-blue-100/50 font-medium">
                        {umkms.length} Tempat
                    </span>
                </div>
                {umkms && umkms.length > 0 ? (
                <div className="space-y-4">
                    {umkms.map((umkm, idx) => (
                        <UMKMCard key={idx} umkm={umkm} onClick={handleUMKMClick} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 px-4 bg-blue-50/50 rounded-xl border-2 border-dashed border-blue-100">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-inner">
                        <MapPinIcon className="h-8 w-8 text-blue-400/70" />
                    </div>
                    <p className="text-slate-600 font-medium">Tidak ada UMKM di lokasi ini</p>
                    <p className="text-xs text-slate-400 mt-1">Coba geser peta ke area lain</p>
                </div>
            )}
            
                {selectedUMKM && (
                    <UMKMModal 
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        umkm={selectedUMKM}
                    />
                )}
            </div>
        </div>
    );
}
