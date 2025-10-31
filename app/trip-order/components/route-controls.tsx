'use client';

import { PlayIcon, PauseIcon, ArrowPathIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

interface RouteControlsProps {
    isPlaying: boolean;
    onPlayPause: () => void;
    onNext: () => void;
    onPrevious: () => void;
    isMuted: boolean;
    onToggleMute: () => void;
}

export default function RouteControls({
    isPlaying,
    onPlayPause,
    onNext,
    onPrevious,
    isMuted,
    onToggleMute
}: RouteControlsProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-center justify-center space-x-4">
                <button
                    onClick={onPrevious}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-700"
                    aria-label="Previous point"
                >
                    <ArrowPathIcon className="h-6 w-6 transform rotate-180" />
                </button>

                <button
                    onClick={onPlayPause}
                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                    {isPlaying ? (
                        <PauseIcon className="h-6 w-6" />
                    ) : (
                        <PlayIcon className="h-6 w-6" />
                    )}
                </button>

                <button
                    onClick={onNext}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-700"
                    aria-label="Next point"
                >
                    <ArrowPathIcon className="h-6 w-6" />
                </button>

                <button
                    onClick={onToggleMute}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-700 ml-4"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                    {isMuted ? (
                        <SpeakerXMarkIcon className="h-6 w-6" />
                    ) : (
                        <SpeakerWaveIcon className="h-6 w-6" />
                    )}
                </button>
            </div>
        </div>
    );
}
