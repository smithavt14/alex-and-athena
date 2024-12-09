import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const publicId = searchParams.get('publicId');

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