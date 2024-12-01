'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MdAttachMoney, MdBedroomParent, MdBathroom } from 'react-icons/md';
import Container from '../components/Container';

const CreateListing: React.FC = () => {
  const [price, setPrice] = useState('');
  const [sqft, setSqft] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here, you would save the listing data to a database or file-based storage

    // Redirect the user to the main page or the newly created listing page
    router.push('/');
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Create a New Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <MdAttachMoney size={24} />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded px-2 py-1 w-24"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Square Feet"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              className="border rounded px-2 py-1 w-24"
            />
          </div>
          <div className="flex items-center space-x-2">
            <MdBedroomParent size={24} />
            <input
              type="text"
              placeholder="Bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="border rounded px-2 py-1 w-24"
            />
          </div>
          <div className="flex items-center space-x-2">
            <MdBathroom size={24} />
            <input
              type="text"
              placeholder="Bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="border rounded px-2 py-1 w-24"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block font-medium mb-2">
            Description:
          </label>
          <textarea
            id="description"
            placeholder="Describe your apartment"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded px-2 py-1 w-full"
          ></textarea>
        </div>
        <div>
          <label htmlFor="images" className="block font-medium mb-2">
            Upload Images:
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={(e) => setImages(e.target.files ? Array.from(e.target.files) : [])}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Listing
        </button>
      </form>
    </Container>
  );
};

export default CreateListing;