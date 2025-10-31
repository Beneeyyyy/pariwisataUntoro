'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, StarIcon, MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface UMKMDetail {
    name: string;
    type: string;
    rating: number;
    distance: string;
    image: string;
    description: string;
    price: string;
    address: string;
    phone: string;
    openHours: string;
    specialties: string[];
    reviews: {
        user: string;
        rating: number;
        comment: string;
        date: string;
    }[];
    gallery: string[];
}

interface UMKMModalProps {
    isOpen: boolean;
    onClose: () => void;
    umkm: UMKMDetail | null;
}

export default function UMKMModal({ isOpen, onClose, umkm }: UMKMModalProps) {
    if (!umkm) return null;

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <StarIcon
                key={i}
                className={`h-4 w-4 ${
                    i < Math.floor(rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                }`}
            />
        ));
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                {/* Header */}
                                <div className="flex items-center justify-between p-6 border-b">
                                    <Dialog.Title className="text-xl font-semibold text-gray-900">
                                        Detail UMKM
                                    </Dialog.Title>
                                    <button
                                        onClick={onClose}
                                        className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <XMarkIcon className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 p-6">
                                    {/* Left Column - Images */}
                                    <div className="space-y-4">
                                        {/* Main Image */}
                                        <div className="relative rounded-xl overflow-hidden bg-gray-200">
                                            <img
                                                src={umkm.image}
                                                alt={umkm.name}
                                                className="w-full h-64 object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&auto=format';
                                                }}
                                            />
                                        </div>

                                        {/* Gallery */}
                                        <div className="grid grid-cols-3 gap-2">
                                            {umkm.gallery.map((img, idx) => (
                                                <div key={idx} className="relative rounded-lg overflow-hidden bg-gray-200">
                                                    <img
                                                        src={img}
                                                        alt={`${umkm.name} ${idx + 1}`}
                                                        className="w-full h-20 object-cover hover:scale-105 transition-transform cursor-pointer"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&h=100&fit=crop&auto=format';
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Column - Details */}
                                    <div className="space-y-6">
                                        {/* Basic Info */}
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{umkm.name}</h2>
                                            <div className="flex items-center space-x-4 mb-3">
                                                <div className="flex items-center">
                                                    {renderStars(umkm.rating)}
                                                    <span className="ml-2 text-sm font-medium text-gray-700">
                                                        {umkm.rating} ({umkm.reviews.length} ulasan)
                                                    </span>
                                                </div>
                                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                                                    {umkm.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">{umkm.description}</p>
                                        </div>

                                        {/* Price */}
                                        <div className="bg-emerald-50 rounded-lg p-4">
                                            <div className="text-sm text-emerald-700 mb-1">Harga Mulai Dari</div>
                                            <div className="text-2xl font-bold text-emerald-800">{umkm.price}</div>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="space-y-3">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <MapPinIcon className="h-4 w-4 mr-2 text-gray-400" />
                                                <span>{umkm.address} • {umkm.distance}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <ClockIcon className="h-4 w-4 mr-2 text-gray-400" />
                                                <span>{umkm.openHours}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600">
                                                <PhoneIcon className="h-4 w-4 mr-2 text-gray-400" />
                                                <span>{umkm.phone}</span>
                                            </div>
                                        </div>

                                        {/* Specialties */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Menu Unggulan</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {umkm.specialties.map((specialty, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                                    >
                                                        {specialty}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3">
                                            <button className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                                                Hubungi Penjual
                                            </button>
                                            <button className="flex-1 border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
                                                Lihat Lokasi
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Reviews Section */}
                                <div className="border-t p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                        Ulasan Pelanggan ({umkm.reviews.length})
                                    </h3>
                                    <div className="space-y-4 max-h-64 overflow-y-auto">
                                        {umkm.reviews.map((review, idx) => (
                                            <div key={idx} className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                                                            <span className="text-sm font-medium text-emerald-700">
                                                                {review.user.charAt(0)}
                                                            </span>
                                                        </div>
                                                        <span className="font-medium text-gray-900">{review.user}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex">
                                                            {renderStars(review.rating)}
                                                        </div>
                                                        <span className="text-xs text-gray-500">{review.date}</span>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600">{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}