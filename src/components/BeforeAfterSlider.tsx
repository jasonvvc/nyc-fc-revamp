import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none rounded-xl cursor-col-resize"
      onMouseDown={handleMouseDown}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Full) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt="After" 
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before" 
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-muted text-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-xl"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-primary absolute left-1" />
          <ChevronRight className="w-5 h-5 text-primary absolute right-1" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
