'use client';

import { XMarkIcon, ClockIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { LocationDetail } from '../types/location';
import { Dialog, Tab, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface LocationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: LocationDetail;
}

export default function LocationDetailModal({ isOpen, onClose, location }: LocationDetailModalProps) {
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
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                  <div className="flex items-center justify-between p-4">
                    <Dialog.Title as="h2" className="text-xl font-bold text-gray-900">
                      {location.name}
                    </Dialog.Title>
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-500"
                      aria-label="Tutup"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="max-h-[80vh] overflow-y-auto">
                  {/* Hero Image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={location.mainImage}
                      alt={location.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

            {/* Tabs */}
            <Tab.Group>
              <Tab.List className="flex border-b border-gray-200">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'px-4 py-2.5 text-sm font-medium',
                      selected
                        ? 'border-b-2 border-emerald-500 text-emerald-600'
                        : 'text-gray-500 hover:text-gray-700'
                    )
                  }
                >
                  Ringkasan
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'px-4 py-2.5 text-sm font-medium',
                      selected
                        ? 'border-b-2 border-emerald-500 text-emerald-600'
                        : 'text-gray-500 hover:text-gray-700'
                    )
                  }
                >
                  Daya Tarik
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'px-4 py-2.5 text-sm font-medium',
                      selected
                        ? 'border-b-2 border-emerald-500 text-emerald-600'
                        : 'text-gray-500 hover:text-gray-700'
                    )
                  }
                >
                  Fakta Menarik
                </Tab>
              </Tab.List>

              <Tab.Panels className="p-6">
                {/* Overview Tab */}
                <Tab.Panel>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Tentang</h3>
                      <p className="mt-2 text-gray-600">{location.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Sejarah</h3>
                      <p className="text-gray-600">{location.history}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <ClockIcon className="h-5 w-5 text-emerald-600" />
                          <h4 className="font-medium text-gray-900">Waktu Terbaik Berkunjung</h4>
                        </div>
                        <p className="text-sm text-gray-600">{location.bestTimeToVisit}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <LightBulbIcon className="h-5 w-5 text-emerald-600" />
                          <h4 className="font-medium text-gray-900">Tips Wisata</h4>
                        </div>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {location.tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>

                {/* Attractions Tab */}
                <Tab.Panel>
                  <div className="space-y-8">
                    {location.attractions.map((attraction, index) => (
                      <div key={index} className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <div className="relative h-48 rounded-lg overflow-hidden">
                            <Image
                              src={attraction.image}
                              alt={attraction.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {attraction.title}
                          </h3>
                          <p className="mt-2 text-gray-600">{attraction.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>

                {/* Fun Facts Tab */}
                <Tab.Panel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {location.funFacts.map((fact, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-40">
                          <Image
                            src={fact.image}
                            alt={fact.fact}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900">{fact.fact}</h3>
                          <p className="mt-2 text-sm text-gray-600">{fact.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </div>
</Dialog>
</Transition>
  );
}
