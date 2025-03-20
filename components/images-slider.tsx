"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  fallbackImages,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  usePicture = false,
}: {
  images: string[];
  fallbackImages?: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
  usePicture?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [loadingError, setLoadingError] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === loadedImages.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? loadedImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    loadImages();
  }, [images]);

  const loadImages = () => {
    setLoading(true);
    setLoadingError(false);
    
    // Use a fallback image in case all images fail to load
    const fallbackImage = "https://assets.imgix.net/examples/kingfisher.jpg?auto=format,compress&w=1920";
    
    // Preload all images in parallel
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = () => {
          console.warn(`Failed to load image: ${image}`);
          reject(new Error(`Failed to load image: ${image}`));
        };
      });
    });

    Promise.allSettled(loadPromises)
      .then((results) => {
        const successfullyLoadedImages = results
          .filter((result): result is PromiseFulfilledResult<string> => result.status === 'fulfilled')
          .map(result => result.value);
        
        if (successfullyLoadedImages.length === 0) {
          // If all images failed to load, use the fallback image
          setLoadedImages([fallbackImage]);
          setLoadingError(true);
          console.warn("All images failed to load, using fallback image");
        } else {
          setLoadedImages(successfullyLoadedImages);
        }
        setLoading(false);
        setInitialLoadComplete(true);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        setLoadedImages([fallbackImage]);
        setLoading(false);
        setLoadingError(true);
        setInitialLoadComplete(true);
      });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: any;
    if (autoplay && loadedImages.length > 1 && initialLoadComplete) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [loadedImages.length, initialLoadComplete]);

  const slideVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      rotateX: 45,
      zIndex: 0,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      zIndex: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 0.3,
      y: "-150%",
      zIndex: 0,
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 0.3,
      y: "150%",
      zIndex: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/75 z-40", overlayClassName)}
        />
      )}

      {loading && !initialLoadComplete && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {loadingError && (
        <div className="absolute bottom-4 right-4 bg-red-500/80 text-white px-4 py-2 rounded-md text-sm z-50">
          Some images failed to load
        </div>
      )}

      {areImagesLoaded && (
        <AnimatePresence mode="sync">
          {usePicture ? (
            <motion.div
              key={currentIndex}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="h-full w-full absolute inset-0"
            >
              <picture>
                <source srcSet={loadedImages[currentIndex]} type="image/webp" />
                <img
                  src={fallbackImages?.[currentIndex] || loadedImages[currentIndex]}
                  className="image h-full w-full absolute inset-0 object-cover object-center brightness-[0.6]"
                  alt="Slider image"
                />
              </picture>
            </motion.div>
          ) : (
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={slideVariants}
              className="image h-full w-full absolute inset-0 object-cover object-center brightness-[0.6]"
              alt="Slider image"
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
