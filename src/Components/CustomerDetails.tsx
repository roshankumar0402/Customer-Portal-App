import React, { useState, useEffect } from "react";

interface Props {
  customer: Customer | null;
}

interface Photo {
  id: number;
  url: string;
}

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const newPhotos: Photo[] = [];
        for (let i = 0; i < 9; i++) {
          const url = `https://source.unsplash.com/random/250x250?sig=${Math.random()}`;
          const photo: Photo = {
            id: i,
            url: url,
          };
          newPhotos.push(photo);
        }
        setPhotos(newPhotos);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (customer) {
      fetchPhotos(); // Fetch photos immediately when the customer changes
      const intervalId = setInterval(fetchPhotos, 10000); // Set interval to fetch photos every 10 seconds
      return () => clearInterval(intervalId); // Clear interval when component unmounts or customer changes
    }
  }, [customer]);

  return (
    <div className="customer-details">
      {customer ? (
        <div className="main-content">
          <h2>Customer Details</h2>
          <p>
            Customer ID: {customer.id} <br />
            Name: {customer.name} <br />
            Title: {customer.title} <br />
            Address: {customer.address}
          </p>
          <h3>Photos</h3>
          <div className="photo-grid">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.url}
                alt={`Random Photo ${photo.id}`}
                width={250}
                height={250}
                className="image"
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Select a customer to see details</p>
      )}
    </div>
  );
};

export default CustomerDetails;
