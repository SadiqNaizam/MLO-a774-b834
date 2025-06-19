import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DynamicMegaMenuPanelProps {
  isOpen: boolean;
  onClose?: () => void; // Optional: if you want a close button inside
  children: React.ReactNode;
  className?: string;
}

const DynamicMegaMenuPanel: React.FC<DynamicMegaMenuPanelProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  console.log("Rendering DynamicMegaMenuPanel, isOpen:", isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className={`absolute top-full left-0 mt-1 w-auto min-w-[500px] bg-background border rounded-md shadow-lg p-4 z-50 ${className || ''}`}
          // onClick={(e) => e.stopPropagation()} // Prevents closing if clicking inside panel
        >
          {/* Optional: Close button if needed
          {onClose && (
            <button onClick={onClose} className="absolute top-2 right-2 p-1">
              <XIcon className="h-5 w-5" />
            </button>
          )}
          */}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DynamicMegaMenuPanel;