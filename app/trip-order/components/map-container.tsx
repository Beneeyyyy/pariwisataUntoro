'use client';

import { useEffect, useRef, forwardRef, useState } from 'react';
import { loadLeaflet } from '@/app/utils/leaflet-loader';

interface MapContainerProps {
    center: [number, number];
    zoom: number;
    onMapLoad?: (map: L.Map) => void;
}

const MapContainer = forwardRef<L.Map | null, MapContainerProps>(({ center, zoom, onMapLoad }, ref) => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !mapRef.current || mapInstance.current) return;

        let mounted = true;
        let map: L.Map | null = null;

        const initializeMap = async () => {
            try {
                const L = await loadLeaflet();
                if (!mounted || !mapRef.current || !L) return;

                // Fix for default markers
                delete (L.Icon.Default.prototype as any)._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                });

                // Initialize map
                map = L.map(mapRef.current, {
                    center,
                    zoom,
                    zoomControl: false,
                    attributionControl: false
                });

                // Add tile layer
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                // Add zoom control
                L.control.zoom({
                    position: 'topright'
                }).addTo(map);

                // Add attribution
                L.control.attribution({
                    position: 'bottomright'
                }).addTo(map);

                mapInstance.current = map;
                setMapReady(true);

                // Expose the map instance to parent via ref
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(map);
                    } else {
                        ref.current = map;
                    }
                }

                if (onMapLoad) {
                    onMapLoad(map);
                }
            } catch (error) {
                console.error('Failed to initialize map:', error);
            }
        };

        initializeMap();

        return () => {
            mounted = false;
            
            // Only clean up if the map container still exists in the DOM
            if (mapRef.current && (mapRef.current as any)._leaflet) {
                if (map) {
                    try {
                        map.off();
                        map.remove();
                    } catch (e) {
                        console.warn('Error while removing map:', e);
                    }
                    map = null;
                }
                
                if (mapInstance.current) {
                    try {
                        mapInstance.current.off();
                        mapInstance.current.remove();
                    } catch (e) {
                        console.warn('Error while removing map instance:', e);
                    }
                    mapInstance.current = null;
                }
                
                // Clear the container
                if (mapRef.current) {
                    mapRef.current.innerHTML = '';
                }
            }
        };
    }, [center, zoom, onMapLoad]);

    return (
        <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
            <div 
                ref={mapRef} 
                className="w-full h-full"
            />
            {!mapReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                        <p className="mt-2 text-slate-600">Memuat peta...</p>
                    </div>
                </div>
            )}
        </div>
    );
});

MapContainer.displayName = 'MapContainer';

export default MapContainer;
