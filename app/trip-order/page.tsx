'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, MapPinIcon } from '@heroicons/react/24/outline';
import JourneyInfo from './components/journey-info';
import MapContainer from './components/map-container';
import RouteControls from './components/route-controls';
import { UMKMSection } from './components/umkm-list';
import RoutePointsList from './components/route-points-list';
import LocationDetails from './components/location-details';

interface RoutePoint {
    id: string;
    lat: number;
    lng: number;
    name: string;
    time: string;
    description: string;
    attractions: string[];
    umkm: UMKM[];
}

// Import tipe UMKM dari umkm-list
import type { UMKM } from './components/umkm-list';

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
            id: 'yogyakarta',
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
            id: 'borobudur',
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
            id: 'yogyakarta-departure',
            lat: -7.7956,
            lng: 110.3695,
            name: 'Yogyakarta (Departure)',
            time: '10:30',
            description: 'Keberangkatan menuju destinasi selanjutnya',
            attractions: ['Terminal Giwangan', 'Rest Area'],
            umkm: []
        },
        {
            id: 'malang',
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
            id: 'banyuwangi',
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
            id: 'denpasar',
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
            id: 'sanur-beach',
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
            id: 'garuda-wisnu-kencana',
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
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);

        return () => {
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
                routePoints.forEach((point) => {
                    const marker = L.marker([point.lat, point.lng], {
                        icon: L.icon({
                            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                        })
                    }).addTo(map);

                    marker.bindPopup(`<b>${point.name}</b><br>${point.time}`);
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
            }, 2000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, currentPointIndex]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const goToNext = () => {
        setCurrentPointIndex(prev =>
            prev < routePoints.length - 1 ? prev + 1 : prev
        );
    };

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
        <div className="min-h-screen relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            </div>
            {/* Header */}
            <div className="bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100/50 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center text-slate-600 hover:text-teal-700 transition-all duration-200 hover:scale-105">
                                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                                Kembali
                            </Link>
                            <div className="h-6 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
                            <h1 className="text-xl font-semibold text-blue-900">
                                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Demo Live Tracking
                                </span>
                            </h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 group">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                    <span>Live Demo</span>
                                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Layout - Simple & Clean */}
            <div className="max-w-7xl mx-auto">
                {/* Top Controls Bar */}
                <div className="sticky top-16 z-40 bg-white/98 backdrop-blur-md border-b border-blue-100/70 shadow-sm px-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-6">
                            {/* Glass effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-blue-100/40 rounded-3xl m-4 -z-10 border border-blue-100/50"></div>
                            <div>
                                <h2 className="text-lg font-semibold text-slate-900">
                                    {currentPoint?.name}
                                </h2>
                                <p className="text-sm text-slate-600">
                                    Titik {currentPointIndex + 1} dari {totalPoints} • {currentPoint?.time}
                                </p>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="flex-1 max-w-md">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${((currentPointIndex + 1) / totalPoints) * 100}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-medium">
                                        {Math.round(((currentPointIndex + 1) / totalPoints) * 100)}%
                                    </span>
                                </div>
                            </div>
                        </div>

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

                {/* Content Area - Natural Scroll */}
                <div className="px-6 pb-8 space-y-6 relative z-10">
                    {/* Map Section */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-blue-200">
                        <div className="h-96 relative z-10">
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

                    {/* Route Points Navigation */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Titik Perjalanan</h3>
                        <RoutePointsList
                            routePoints={routePoints}
                            currentPointIndex={currentPointIndex}
                            onPointClick={handlePointClick}
                        />
                    </div>

                    {/* Location Details */}
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        {currentPoint && (
                            <LocationDetails
                                name={currentPoint.name}
                                description={currentPoint.description}
                                time={currentPoint.time}
                                attractions={currentPoint.attractions}
                                getLocationImage={getLocationImage}
                                getLocationHistory={getLocationHistory}
                                getLocationActivities={getLocationActivities}
                            />
                        )}
                    </div>

                    {/* UMKM Section */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-blue-200">
                        <UMKMSection umkms={currentPoint?.umkm || []} />
                    </div>

                    {/* Journey Summary */}
                    <div className="relative z-10">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100/30 rounded-xl opacity-50 -z-10"></div>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">Ringkasan Perjalanan</h3>
                                        <p className="text-slate-700 text-sm mt-1">
                                            Estimasi tiba: {estimatedArrival} • {totalPoints} destinasi
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                                            {Math.round(((currentPointIndex + 1) / totalPoints) * 100)}%
                                        </div>
                                        <div className="text-xs text-blue-600 font-medium">Selesai</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* UMKM Modal is now handled inside UMKMSection */}
        </div>
    );
}