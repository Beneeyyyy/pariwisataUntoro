'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, MapPinIcon } from '@heroicons/react/24/outline';
import JourneyInfo from './components/journey-info';
import MapContainer from './components/map-container';
import RouteControls from './components/route-controls';
import UMKMModal from './components/umkm-modal';

interface RoutePoint {
    lat: number;
    lng: number;
    name: string;
    time: string;
    description: string;
    attractions: string[];
    umkm: UMKM[];
}

interface UMKM {
    name: string;
    type: string;
    rating: number;
    distance: string;
}

// UMKM Detail Data
const getUMKMDetail = (umkmName: string, type: string) => {
    const umkmDetails: { [key: string]: any } = {
        'Gudeg Yu Djum': {
            name: 'Gudeg Yu Djum',
            type: 'Kuliner',
            rating: 4.8,
            distance: '0.5 km',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop&auto=format',
            description: 'Gudeg legendaris Yogyakarta dengan cita rasa autentik yang telah diwariskan turun temurun. Menggunakan nangka muda pilihan dan bumbu rempah tradisional.',
            price: 'Rp 15.000 - Rp 25.000',
            address: 'Jl. Wijilan No. 167, Panembahan, Kraton, Yogyakarta',
            phone: '+62 274 384813',
            openHours: '06:00 - 15:00 WIB',
            specialties: ['Gudeg Kering', 'Gudeg Basah', 'Ayam Kampung', 'Telur Pindang'],
            reviews: [
                { user: 'Sari Dewi', rating: 5, comment: 'Gudeg terenak di Jogja! Rasanya autentik dan porsinya besar.', date: '2 hari lalu' },
                { user: 'Budi Santoso', rating: 4, comment: 'Tempat legendaris dengan rasa yang konsisten. Recommended!', date: '1 minggu lalu' },
                { user: 'Maya Putri', rating: 5, comment: 'Sudah langganan dari dulu, never disappointed!', date: '2 minggu lalu' }
            ],
            gallery: [
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=150&h=100&fit=crop&auto=format'
            ]
        },
        'Batik Winotosastro': {
            name: 'Batik Winotosastro',
            type: 'Kerajinan',
            rating: 4.6,
            distance: '1.2 km',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&auto=format',
            description: 'Toko batik tradisional dengan koleksi batik tulis dan cap berkualitas tinggi. Menyediakan berbagai motif klasik dan modern.',
            price: 'Rp 150.000 - Rp 2.500.000',
            address: 'Jl. Tirtodipuran No. 28, Mantrijeron, Yogyakarta',
            phone: '+62 274 376295',
            openHours: '08:00 - 21:00 WIB',
            specialties: ['Batik Tulis', 'Batik Cap', 'Kemeja Batik', 'Dress Batik'],
            reviews: [
                { user: 'Indira Sari', rating: 5, comment: 'Koleksi batiknya lengkap dan berkualitas. Pelayanan ramah!', date: '3 hari lalu' },
                { user: 'Agus Prasetyo', rating: 4, comment: 'Harga sesuai kualitas, motifnya bagus-bagus.', date: '5 hari lalu' }
            ],
            gallery: [
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1564584217132-2271339e5821?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=100&fit=crop&auto=format'
            ]
        },
        'Warung Stupa': {
            name: 'Warung Stupa',
            type: 'Kuliner',
            rating: 4.5,
            distance: '0.3 km',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format',
            description: 'Warung makan dengan pemandangan Candi Borobudur. Menyajikan masakan Jawa tradisional dan menu nusantara.',
            price: 'Rp 25.000 - Rp 45.000',
            address: 'Jl. Badrawati, Borobudur, Magelang, Jawa Tengah',
            phone: '+62 293 788266',
            openHours: '07:00 - 22:00 WIB',
            specialties: ['Nasi Gudeg', 'Ayam Bakar', 'Pecel Lele', 'Es Dawet'],
            reviews: [
                { user: 'Rina Wati', rating: 5, comment: 'Makanan enak dengan view Borobudur yang menakjubkan!', date: '1 hari lalu' },
                { user: 'Doni Kurniawan', rating: 4, comment: 'Tempatnya strategis, makanannya juga enak.', date: '4 hari lalu' }
            ],
            gallery: [
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=100&fit=crop&auto=format'
            ]
        },
        'Apel Malang Pak Kumis': {
            name: 'Apel Malang Pak Kumis',
            type: 'Buah',
            rating: 4.7,
            distance: '0.4 km',
            image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=250&fit=crop&auto=format',
            description: 'Toko buah apel segar langsung dari kebun Malang. Menyediakan berbagai varietas apel berkualitas premium dengan rasa manis dan segar.',
            price: 'Rp 8.000 - Rp 15.000/kg',
            address: 'Jl. Veteran No. 12, Penanggungan, Malang, Jawa Timur',
            phone: '+62 341 551234',
            openHours: '06:00 - 18:00 WIB',
            specialties: ['Apel Manalagi', 'Apel Anna', 'Apel Rome Beauty', 'Apel Fuji'],
            reviews: [
                { user: 'Lestari Sari', rating: 5, comment: 'Apelnya segar dan manis, harga juga terjangkau!', date: '2 hari lalu' },
                { user: 'Andi Wijaya', rating: 4, comment: 'Kualitas apel bagus, cocok untuk oleh-oleh.', date: '1 minggu lalu' },
                { user: 'Fitri Handayani', rating: 5, comment: 'Langganan beli apel di sini, selalu fresh!', date: '3 hari lalu' }
            ],
            gallery: [
                'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=150&h=100&fit=crop&auto=format'
            ]
        },
        'Warung Mak Beng': {
            name: 'Warung Mak Beng',
            type: 'Kuliner',
            rating: 4.9,
            distance: '0.2 km',
            image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=250&fit=crop&auto=format',
            description: 'Warung legendaris di Sanur yang terkenal dengan ikan goreng dan nasi putihnya. Menu sederhana tapi cita rasa yang tak terlupakan.',
            price: 'Rp 20.000 - Rp 35.000',
            address: 'Jl. Hang Tuah No. 45, Sanur, Denpasar Selatan, Bali',
            phone: '+62 361 287374',
            openHours: '11:00 - 15:00 WIB',
            specialties: ['Ikan Goreng', 'Nasi Putih', 'Sambal Matah', 'Es Teh Manis'],
            reviews: [
                { user: 'Made Sutrisna', rating: 5, comment: 'Warung legendaris! Ikan gorengnya juara, sambalnya mantap!', date: '1 hari lalu' },
                { user: 'Kadek Ayu', rating: 5, comment: 'Simple tapi enak banget, harus antri tapi worth it!', date: '2 hari lalu' },
                { user: 'Wayan Gede', rating: 4, comment: 'Klasik Bali yang wajib dicoba kalau ke Sanur.', date: '5 hari lalu' }
            ],
            gallery: [
                'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&h=100&fit=crop&auto=format',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=100&fit=crop&auto=format'
            ]
        }
    };

    return umkmDetails[umkmName] || {
        name: umkmName,
        type: type,
        rating: 4.0,
        distance: '1.0 km',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format',
        description: 'UMKM lokal dengan produk berkualitas dan pelayanan terbaik.',
        price: 'Rp 10.000 - Rp 50.000',
        address: 'Alamat lengkap akan ditampilkan di sini',
        phone: '+62 xxx xxxx xxxx',
        openHours: '08:00 - 20:00 WIB',
        specialties: ['Produk Unggulan 1', 'Produk Unggulan 2', 'Produk Unggulan 3'],
        reviews: [
            { user: 'Customer', rating: 4, comment: 'Produk berkualitas dengan harga terjangkau.', date: '1 minggu lalu' }
        ],
        gallery: [
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&h=100&fit=crop&auto=format',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=150&h=100&fit=crop&auto=format',
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=100&fit=crop&auto=format'
        ]
    };
};

// Helper functions for location details
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

const getLocationHistory = (locationName: string): string => {
    const histories: { [key: string]: string } = {
        'Yogyakarta': 'Yogyakarta didirikan pada tahun 1755 sebagai hasil dari Perjanjian Giyanti. Kota ini merupakan pusat kebudayaan Jawa dan pernah menjadi ibu kota Indonesia pada masa revolusi kemerdekaan.',
        'Borobudur Temple': 'Dibangun pada abad ke-8 dan ke-9 Masehi selama masa pemerintahan Dinasti Syailendra. Candi ini merupakan monumen Buddha terbesar di dunia dan menjadi salah satu keajaiban dunia.',
        'Malang': 'Malang memiliki sejarah panjang sejak zaman Kerajaan Singhasari dan Majapahit. Kota ini berkembang pesat pada masa kolonial Belanda sebagai kota pegunungan yang sejuk.',
        'Banyuwangi': 'Banyuwangi berasal dari kata "Banyu" (air) dan "Wangi" (harum). Daerah ini memiliki sejarah sebagai pelabuhan penting di ujung timur Pulau Jawa.',
        'Denpasar': 'Denpasar menjadi ibu kota Bali sejak tahun 1958. Kota ini berkembang dari sebuah pasar tradisional menjadi pusat pemerintahan dan perdagangan Bali.',
        'Sanur Beach': 'Sanur adalah salah satu pantai tertua di Bali yang mulai dikembangkan sebagai destinasi wisata pada tahun 1960-an oleh wisatawan asing.',
        'Garuda Wisnu Kencana': 'Patung GWK mulai dibangun pada tahun 1997 dan selesai pada tahun 2018. Patung ini melambangkan filosofi Hindu tentang keseimbangan alam semesta.'
    };
    return histories[locationName] || 'Lokasi bersejarah dengan nilai budaya dan wisata yang tinggi.';
};

const getLocationActivities = (locationName: string): string[] => {
    const activities: { [key: string]: string[] } = {
        'Yogyakarta': ['City Walking Tour', 'Batik Workshop', 'Gudeg Tasting', 'Keraton Visit'],
        'Borobudur Temple': ['Sunrise Tour', 'Photography', 'Cultural Learning', 'Meditation'],
        'Malang': ['Apple Picking', 'Waterfall Trekking', 'Coffee Plantation', 'Art Village Tour'],
        'Banyuwangi': ['Ijen Crater Hike', 'Blue Fire Tour', 'Beach Activities', 'Cultural Show'],
        'Denpasar': ['Market Tour', 'Temple Visit', 'Traditional Dance', 'Local Cuisine'],
        'Sanur Beach': ['Sunrise Watching', 'Beach Walk', 'Water Sports', 'Art Market'],
        'Garuda Wisnu Kencana': ['Statue Tour', 'Cultural Show', 'Photography', 'Sunset View']
    };
    return activities[locationName] || ['Sightseeing', 'Photography', 'Local Experience', 'Cultural Tour'];
};

export default function TripOrderPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [estimatedArrival, setEstimatedArrival] = useState('14:30');
    const [currentPointIndex, setCurrentPointIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isUMKMModalOpen, setIsUMKMModalOpen] = useState(false);
    const [selectedUMKM, setSelectedUMKM] = useState<any>(null);
    const mapRef = useRef<L.Map | null>(null);

    const routePoints: RoutePoint[] = [
        {
            lat: -7.7956,
            lng: 110.3695,
            name: 'Yogyakarta',
            time: '08:00',
            description: 'Kota budaya dengan berbagai wisata sejarah dan kuliner khas',
            attractions: ['Keraton Yogyakarta', 'Taman Sari', 'Malioboro Street'],
            umkm: [
                { name: 'Gudeg Yu Djum', type: 'Kuliner', rating: 4.8, distance: '0.5 km' },
                { name: 'Batik Winotosastro', type: 'Kerajinan', rating: 4.6, distance: '1.2 km' },
                { name: 'Bakpia Pathok 25', type: 'Oleh-oleh', rating: 4.7, distance: '0.8 km' }
            ]
        },
        {
            lat: -7.6175,
            lng: 110.2037,
            name: 'Borobudur Temple',
            time: '09:15',
            description: 'Candi Buddha terbesar di dunia, warisan UNESCO',
            attractions: ['Candi Borobudur', 'Museum Borobudur', 'Sunrise Point'],
            umkm: [
                { name: 'Warung Stupa', type: 'Kuliner', rating: 4.5, distance: '0.3 km' },
                { name: 'Kerajinan Batu Borobudur', type: 'Souvenir', rating: 4.4, distance: '0.5 km' },
                { name: 'Kopi Klotok', type: 'Minuman', rating: 4.6, distance: '0.7 km' }
            ]
        },
        {
            lat: -7.7956,
            lng: 110.3695,
            name: 'Yogyakarta (Departure)',
            time: '10:30',
            description: 'Keberangkatan menuju destinasi selanjutnya',
            attractions: ['Terminal Giwangan', 'Rest Area'],
            umkm: []
        },
        {
            lat: -7.8014,
            lng: 112.0178,
            name: 'Malang',
            time: '16:45',
            description: 'Kota apel dengan udara sejuk dan wisata alam',
            attractions: ['Jatim Park', 'Coban Rondo', 'Kampung Warna-warni'],
            umkm: [
                { name: 'Apel Malang Pak Kumis', type: 'Buah', rating: 4.7, distance: '0.4 km' },
                { name: 'Bakso Bakar Pak Man', type: 'Kuliner', rating: 4.8, distance: '0.6 km' },
                { name: 'Keripik Tempe Sanan', type: 'Oleh-oleh', rating: 4.5, distance: '1.0 km' }
            ]
        },
        {
            lat: -8.1132,
            lng: 114.2421,
            name: 'Banyuwangi',
            time: '22:30',
            description: 'Gerbang timur Jawa dengan keindahan alam',
            attractions: ['Kawah Ijen', 'Pantai Red Island', 'Taman Nasional Baluran'],
            umkm: [
                { name: 'Rujak Soto Banyuwangi', type: 'Kuliner', rating: 4.6, distance: '0.3 km' },
                { name: 'Kopi Robusta Ijen', type: 'Minuman', rating: 4.8, distance: '0.8 km' },
                { name: 'Batik Gajah Oling', type: 'Kerajinan', rating: 4.5, distance: '1.1 km' }
            ]
        },
        {
            lat: -8.3405,
            lng: 115.0920,
            name: 'Denpasar',
            time: '02:15',
            description: 'Ibu kota Bali dengan budaya dan tradisi yang kaya',
            attractions: ['Pasar Badung', 'Museum Bali', 'Pura Jagatnatha'],
            umkm: [
                { name: 'Lawar Kuwir Pak Made', type: 'Kuliner', rating: 4.7, distance: '0.5 km' },
                { name: 'Kerajinan Perak Celuk', type: 'Perhiasan', rating: 4.6, distance: '2.0 km' },
                { name: 'Pie Susu Dhian', type: 'Oleh-oleh', rating: 4.8, distance: '0.9 km' }
            ]
        },
        {
            lat: -8.4095,
            lng: 115.1889,
            name: 'Sanur Beach',
            time: '03:00',
            description: 'Pantai tenang dengan sunrise terbaik di Bali',
            attractions: ['Pantai Sanur', 'Pasar Sindhu', 'Museum Le Mayeur'],
            umkm: [
                { name: 'Warung Mak Beng', type: 'Kuliner', rating: 4.9, distance: '0.2 km' },
                { name: 'Sanur Beach Market', type: 'Souvenir', rating: 4.4, distance: '0.3 km' },
                { name: 'Jukung Coffee', type: 'Minuman', rating: 4.6, distance: '0.4 km' }
            ]
        },
        {
            lat: -8.8111,
            lng: 115.1628,
            name: 'Garuda Wisnu Kencana',
            time: '04:30',
            description: 'Patung Garuda Wisnu Kencana yang megah dengan pemandangan spektakuler',
            attractions: ['Patung GWK', 'Amphitheater', 'Lotus Pond'],
            umkm: [
                { name: 'Warung Nasi Ayam Kedewatan', type: 'Kuliner', rating: 4.7, distance: '1.5 km' },
                { name: 'Kerajinan Bambu Jimbaran', type: 'Souvenir', rating: 4.5, distance: '2.0 km' },
                { name: 'Kopi Luwak Uluwatu', type: 'Minuman', rating: 4.8, distance: '3.0 km' }
            ]
        }
    ];

    // Load Leaflet CSS on client side
    useEffect(() => {
        // Add Leaflet CSS dynamically
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);

        return () => {
            // Cleanup on unmount
            const existingLink = document.querySelector('link[href*="leaflet.css"]');
            if (existingLink) {
                document.head.removeChild(existingLink);
            }
        };
    }, []);

    // Initialize markers and polylines when map is loaded
    useEffect(() => {
        const updateMapMarkers = async () => {
            if (!mapRef.current) return;

            try {
                const L = await import('leaflet');
                const map = mapRef.current;

                // Clear existing layers
                map.eachLayer(layer => {
                    if (layer instanceof L.Marker || layer instanceof L.Polyline) {
                        map.removeLayer(layer);
                    }
                });

                // Add markers for each point
                routePoints.forEach((point, index) => {
                    const marker = L.marker([point.lat, point.lng]).addTo(map);
                    if (index === currentPointIndex) {
                        // Highlight current point
                        const icon = L.divIcon({
                            className: 'current-location-marker',
                            html: '📍',
                            iconSize: [30, 30],
                            iconAnchor: [15, 30],
                        });
                        marker.setIcon(icon);
                    }
                });

                // Add polyline for the route
                if (routePoints.length > 1) {
                    const latlngs = routePoints.map(point => [point.lat, point.lng]);
                    L.polyline(latlngs as [number, number][], { color: '#3b82f6' }).addTo(map);
                }

                // Pan to current point
                const currentPoint = routePoints[currentPointIndex];
                if (currentPoint) {
                    map.flyTo([currentPoint.lat, currentPoint.lng], 12, {
                        duration: 1,
                        animate: true
                    });
                }
            } catch (error) {
                console.error('Error updating map markers:', error);
            }
        };

        updateMapMarkers();
    }, [currentPointIndex, routePoints]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isPlaying && currentPointIndex < routePoints.length - 1) {
            interval = setInterval(() => {
                setCurrentPointIndex(prevIndex => {
                    const nextIndex = prevIndex + 1;
                    if (nextIndex < routePoints.length) {
                        const nextPoint = routePoints[nextIndex];
                        setEstimatedArrival(nextPoint.time);
                    }
                    return nextIndex;
                });
            }, 2000); // Move to next point every 2 seconds
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, currentPointIndex]);

    // Toggle play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Toggle mute
    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    // Go to next point
    const goToNext = () => {
        setCurrentPointIndex(prev =>
            prev < routePoints.length - 1 ? prev + 1 : prev
        );
    };

    // Go to previous point
    const goToPrevious = () => {
        setCurrentPointIndex(prev =>
            prev > 0 ? prev - 1 : prev
        );
    };



    const handlePointClick = async (index: number, point: RoutePoint) => {
        setCurrentPointIndex(index);
        setEstimatedArrival(point.time);

        if (mapRef.current) {
            try {
                const L = await import('leaflet');
                mapRef.current.flyTo([point.lat, point.lng], 12, {
                    duration: 1,
                    animate: true
                });
            } catch (error) {
                console.error('Error flying to location:', error);
            }
        }
    };

    const handleUMKMClick = (umkm: UMKM) => {
        const umkmDetail = getUMKMDetail(umkm.name, umkm.type);
        setSelectedUMKM(umkmDetail);
        setIsUMKMModalOpen(true);
    };

    const closeUMKMModal = () => {
        setIsUMKMModalOpen(false);
        setSelectedUMKM(null);
    };

    const currentPoint = routePoints[currentPointIndex];
    const totalPoints = routePoints.length;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center text-slate-600 hover:text-slate-900 transition-colors">
                                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                                Kembali
                            </Link>
                            <div className="h-6 w-px bg-slate-300"></div>
                            <h1 className="text-xl font-semibold text-slate-900">Demo Live Tracking</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                                Live Demo
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Top Section: Map + Right Panel */}
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    {/* Map Section */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                            <div className="p-6 border-b">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-slate-900 mb-1">Rute Perjalanan</h2>
                                        <p className="text-slate-600">Yogyakarta → Bali (via Tourist Spots)</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <RouteControls
                                            isPlaying={isPlaying}
                                            onPlayPause={togglePlayPause}
                                            onNext={goToNext}
                                            onPrevious={goToPrevious}
                                            isMuted={isMuted}
                                            onToggleMute={toggleMute}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[600px] w-full">
                                <MapContainer
                                    ref={mapRef}
                                    center={[currentPoint.lat, currentPoint.lng]}
                                    zoom={12}
                                    onMapLoad={(map) => {
                                        mapRef.current = map;
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Trip Info + Route Points */}
                    <div className="space-y-6">
                        {/* Journey Info */}
                        <JourneyInfo
                            estimatedArrival={estimatedArrival}
                            currentProgress={currentPointIndex + 1}
                            totalPoints={totalPoints}
                            currentLocation={{
                                name: currentPoint?.name || '',
                                description: currentPoint?.description || '',
                                image: getLocationImage(currentPoint?.name || ''),
                                time: currentPoint?.time || '',
                                attractions: currentPoint?.attractions || [],
                                history: getLocationHistory(currentPoint?.name || ''),
                                activities: getLocationActivities(currentPoint?.name || ''),
                                coordinates: [currentPoint?.lat || 0, currentPoint?.lng || 0]
                            }}
                        />

                        {/* Route Points */}
                        <div className="bg-white rounded-2xl shadow-sm border p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">Titik Perjalanan</h3>

                            <div className="space-y-3">
                                {routePoints.map((point, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handlePointClick(index, point)}
                                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors cursor-pointer hover:bg-slate-100 ${index === currentPointIndex
                                            ? 'bg-emerald-50 border border-emerald-200'
                                            : index < currentPointIndex
                                                ? 'bg-slate-50'
                                                : 'bg-white'
                                            }`}
                                    >
                                        <div className={`w-3 h-3 rounded-full ${index === currentPointIndex
                                            ? 'bg-emerald-500 animate-pulse'
                                            : index < currentPointIndex
                                                ? 'bg-slate-400'
                                                : 'bg-slate-200'
                                            }`}></div>
                                        <div className="flex-1">
                                            <p className={`font-medium ${index === currentPointIndex ? 'text-emerald-900' : 'text-slate-900'
                                                }`}>
                                                {point.name}
                                            </p>
                                            <p className="text-sm text-slate-600">{point.time} WIB</p>
                                        </div>
                                        {index === currentPointIndex && (
                                            <div className="text-emerald-600 text-sm font-medium">Saat ini</div>
                                        )}
                                        {index < currentPointIndex && (
                                            <div className="text-slate-400 text-sm">✓</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Detail Lokasi + UMKM */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Location Details */}
                    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-slate-900 mb-4">Detail Lokasi</h3>
                        </div>

                        {/* Location Image */}
                        <div className="relative h-64 w-full bg-gray-200">
                            <img
                                src={getLocationImage(currentPoint?.name || '')}
                                alt={currentPoint?.name || ''}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format';
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-6 text-white">
                                <h4 className="text-xl font-bold mb-1">{currentPoint?.name}</h4>
                                <p className="text-sm opacity-90">{currentPoint?.description}</p>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* History */}
                            <div>
                                <h5 className="text-sm font-semibold text-slate-900 mb-2">Sejarah</h5>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {getLocationHistory(currentPoint?.name || '')}
                                </p>
                            </div>

                            {/* Attractions */}
                            {currentPoint?.attractions && currentPoint.attractions.length > 0 && (
                                <div>
                                    <h5 className="text-sm font-semibold text-slate-900 mb-2">Tempat Wisata</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {currentPoint.attractions.map((attraction, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                                            >
                                                {attraction}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Activities */}
                            <div>
                                <h5 className="text-sm font-semibold text-slate-900 mb-2">Aktivitas</h5>
                                <div className="grid grid-cols-2 gap-2">
                                    {getLocationActivities(currentPoint?.name || '').map((activity, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center p-2 bg-slate-50 rounded-lg border border-slate-200"
                                        >
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                            <span className="text-xs text-slate-700">{activity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visit Time */}
                            <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                                <span className="text-sm font-medium text-slate-900">Waktu Kunjungan</span>
                                <span className="text-sm text-emerald-700 font-medium">{currentPoint?.time} WIB</span>
                            </div>
                        </div>
                    </div>

                    {/* UMKM List */}
                    <div className="bg-white rounded-2xl shadow-sm border p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">UMKM Sekitar</h3>

                        {currentPoint?.umkm && currentPoint.umkm.length > 0 ? (
                            <div className="space-y-3">
                                {currentPoint.umkm.map((umkm, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => handleUMKMClick(umkm)}
                                        className="border border-slate-200 rounded-lg p-3 hover:bg-slate-50 hover:border-emerald-300 transition-all cursor-pointer group"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-medium text-slate-900 group-hover:text-emerald-700 transition-colors">{umkm.name}</h4>
                                            <div className="flex items-center text-xs text-yellow-600">
                                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                {umkm.rating}
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full group-hover:bg-emerald-200 transition-colors">{umkm.type}</span>
                                            <span className="text-xs text-slate-500 group-hover:text-slate-600">{umkm.distance}</span>
                                        </div>
                                        <div className="mt-2 text-xs text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Klik untuk melihat detail →
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-slate-500">
                                <MapPinIcon className="h-12 w-12 mx-auto mb-3 text-slate-300" />
                                <p>Tidak ada UMKM di lokasi ini</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* UMKM Detail Modal */}
            <UMKMModal
                isOpen={isUMKMModalOpen}
                onClose={closeUMKMModal}
                umkm={selectedUMKM}
            />
        </div>
    );
}