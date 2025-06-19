import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from '@/components/ui/aspect-ratio'; // For consistent image sizing
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  id: string | number;
  type: 'image' | 'video' | 'custom';
  src?: string; // For image or video URL
  alt?: string; // For image alt text
  content?: React.ReactNode; // For custom content
  title?: string;
  description?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  options?: Parameters<typeof useEmblaCarousel>[0];
  autoplayDelay?: number;
  showArrows?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  options = { loop: true },
  autoplayDelay = 5000,
  showArrows = true,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]);

  console.log("Rendering Carousel with slides:", slides.length);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  if (!slides || slides.length === 0) {
    return <div className="text-center p-4">No slides to display.</div>;
  }

  return (
    <div className="embla relative overflow-hidden group">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div className="embla__slide flex-[0_0_100%] min-w-0" key={slide.id}>
              <AspectRatio ratio={16 / 6} className="bg-muted"> {/* Adjust ratio for hero */}
                {slide.type === 'image' && slide.src && (
                  <img
                    src={slide.src}
                    alt={slide.alt || slide.title || 'Carousel image'}
                    className="object-cover w-full h-full"
                    onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
                  />
                )}
                {slide.type === 'video' && slide.src && (
                  <video
                    src={slide.src}
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline // Important for mobile
                  />
                )}
                {slide.type === 'custom' && slide.content}
                {(slide.title || slide.description) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-8 text-center">
                    {slide.title && <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{slide.title}</h2>}
                    {slide.description && <p className="text-lg text-gray-200">{slide.description}</p>}
                  </div>
                )}
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
      {showArrows && emblaApi && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}
    </div>
  );
}
export default Carousel;