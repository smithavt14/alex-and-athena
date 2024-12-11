import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function getImageMetadata(publicId) {
  try {
    const result = await cloudinary.api.resource(publicId, {
      fields: 'context',
    });
    return Response.json({ metadata: result.context || {} });
  } catch (error) {
    console.error('Error fetching Cloudinary metadata:', error);
    return Response.json({ error: 'Failed to fetch metadata' }, { status: 500 });
  }
}

async function getImagesInFolder(folderName) {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderName,
      max_results: 500 // adjust as needed
    });
    
    const images = result.resources.map(resource => ({
      public_id: resource.public_id,
      url: resource.secure_url
    }));

    return Response.json({ images });
  } catch (error) {
    console.error('Error fetching images:', error);
    return Response.json({ error: 'Failed to fetch images' }, { status: 500 });
  }
}

export const GET = (request) => {
  const { searchParams } = new URL(request.url);
  const publicId = searchParams.get('publicId');
  return getImageMetadata(publicId);
};

export const POST = (request) => {
  return request.json()
    .then(({ folderName }) => getImagesInFolder(folderName));
}; 