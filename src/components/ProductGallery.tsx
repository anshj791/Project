import React from 'react';

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square rounded-lg overflow-hidden">
        <img src={selectedImage} alt="Product" className="w-full h-full object-cover" />
      </div>
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
              selectedImage === image ? 'border-red-500' : 'border-transparent'
            }`}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}