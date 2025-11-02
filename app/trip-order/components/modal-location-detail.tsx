import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalLocationDetailProps {
  isOpen: boolean;
  onClose: () => void;
  locationName: string;
  children?: React.ReactNode;
}

export default function ModalLocationDetail({ 
  isOpen, 
  onClose, 
  locationName,
  children 
}: ModalLocationDetailProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">{locationName}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-700"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-60px)]">
          {children || (
            <div className="text-center py-8 text-slate-500">
              <p>No details available for this location.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
