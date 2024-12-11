import CloudinaryImage from './CloudinaryImage';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

export default function ImageGrid({ albumName, onImageSelect }) {
    const [images, setImages] = useState([]);
    
    const breakpointColumns = {
        default: 3,
        1024: 3,
        768: 2,
        640: 1
    };

    useEffect(() => {
        async function fetchImages() {
            const response = await fetch('/api/cloudinary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ folderName: albumName }),
            });
            const data = await response.json();
            setImages(data.images);
        }
        
        fetchImages();
    }, [albumName]);

    return (
        <Masonry
            breakpointCols={breakpointColumns}
            className="flex w-full gap-4 px-4"
            columnClassName="masonry-grid_column"
        >
            {images.map((image, i) => (
                <div
                    key={image.public_id}
                    className="cursor-pointer transition-transform hover:scale-105 mb-4"
                    onClick={() => onImageSelect(image.public_id)}
                >
                    <CloudinaryImage
                        src={image.public_id}
                        alt={`Image ${i + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>
            ))}
        </Masonry>
    );
} 