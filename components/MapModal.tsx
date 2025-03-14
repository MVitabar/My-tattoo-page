import { X } from "lucide-react"
import { useCallback } from "react"

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MapModal({ isOpen, onClose }: MapModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick} // Add click handler to backdrop
    >
      <div className="bg-zinc-900 rounded-lg w-full max-w-4xl">
        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
          <h3 className="text-xl font-bold text-white">Localização</h3>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <div className="relative w-full h-[450px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1238206612998!2d-49.42681252770116!3d-28.59606201187244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95219c3c695c9ff1%3A0x48b6f889aebf7cb8!2sR.%20Melvin%20Jones%2C%2050%2C%20Sider%C3%B3polis%20-%20SC%2C%2088860-000!5e0!3m2!1ses-419!2sbr!4v1741957465065!5m2!1ses-419!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
          <p className="text-center text-zinc-300 mt-4">
            Rua Melvin Jones, 50 - Siderópolis, SC
          </p>
        </div>
      </div>
    </div>
  );
}