import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface AnimatedBuildingShowcaseProps {
  mediaUrl: string;
  mediaType: 'image' | 'video';
  altText?: string;
  title?: string;
  description?: string;
  aspectRatio?: number; // e.g., 16/9 or 4/3 or 1 for square
}

const AnimatedBuildingShowcase: React.FC<AnimatedBuildingShowcaseProps> = ({
  mediaUrl,
  mediaType,
  altText = "Campus Building Showcase",
  title,
  description,
  aspectRatio = 16 / 9,
}) => {
  console.log("Rendering AnimatedBuildingShowcase with media:", mediaUrl);

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-lg shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <AspectRatio ratio={aspectRatio} className="bg-slate-800">
        {mediaType === 'image' ? (
          <img
            src={mediaUrl}
            alt={altText}
            className="object-cover w-full h-full"
            onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
          />
        ) : (
          <video
            src={mediaUrl}
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </AspectRatio>
      {(title || description) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-10 flex flex-col justify-end">
          {title && <motion.h3
            className="text-2xl md:text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            {title}
          </motion.h3>}
          {description && <motion.p
            className="text-sm md:text-lg text-gray-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            {description}
          </motion.p>}
        </div>
      )}
    </motion.div>
  );
};

export default AnimatedBuildingShowcase;