"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  
  // Pinch zoom state
  const [startDist, setStartDist] = useState(0);
  const [startScale, setStartScale] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e?: React.MouseEvent | React.TouchEvent) => {
    e?.stopPropagation();
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next <= 1.5) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  // Helper to get distance between two touch points
  const getDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      e.preventDefault();
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      e.preventDefault();
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch start
      e.preventDefault();
      const dist = getDistance(e.touches);
      setStartDist(dist);
      setStartScale(scale);
    } else if (e.touches.length === 1 && scale > 1) {
      // Drag start
      setIsDragging(true);
      setStartPos({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch move
      e.preventDefault();
      const dist = getDistance(e.touches);
      if (startDist > 0) {
        const zoomFactor = dist / startDist;
        const newScale = Math.min(Math.max(startScale * zoomFactor, 1), 4);
        setScale(newScale);
      }
    } else if (isDragging && scale > 1 && e.touches.length === 1) {
      // Drag move
      e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - startPos.x,
        y: e.touches[0].clientY - startPos.y,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      setStartDist(0);
    }
    if (e.touches.length === 0) {
      setIsDragging(false);
      // Snap back if scale is less than 1
      if (scale < 1) {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md touch-none"
      onClick={onClose}
      ref={containerRef}
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-4 z-[110]">
        <button
          onClick={handleZoomIn}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-colors active:scale-95"
          aria-label="Zoom in"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-colors active:scale-95"
          aria-label="Zoom out"
          disabled={scale <= 1}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <button
          onClick={onClose}
          className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur transition-colors active:scale-95"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Image Container */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        style={{ cursor: scale > 1 ? "grab" : "default" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image area
      >
        <div
          className="relative transition-transform duration-100 ease-out origin-center"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            touchAction: "none",
          }}
        >
          <div className="relative w-full h-full max-w-[95vw] max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              draggable={false}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}


