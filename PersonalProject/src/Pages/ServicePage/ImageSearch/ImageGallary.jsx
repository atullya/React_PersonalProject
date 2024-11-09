import React from "react";

export default function ImageGallary({ allImages }) {
  return (
    <div>
      <ImageSection allImages={allImages} />
    </div>
  );
}

function ImageSection({ allImages }) {
  return (
    <section className="py-6 bg-gray-100 text-gray-900">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        {/* Ensure there are enough images before accessing them */}
        {allImages.length > 0 ? (
          <>
            <img
              src={allImages[0].links.download}
              alt=""
              loading="lazy" // Lazy load for the first image
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
            />
            {allImages.slice(1, 9).map((image, index) => (
              <img
                key={index}
                src={image.links.download}
                alt=""
                loading="lazy" // Lazy load for subsequent images
                className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
              />
            ))}
            <img
              src={allImages[9].links.download}
              alt=""
              loading="lazy" // Lazy load for the last image
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
            />
          </>
        ) : (
          "No Image Found"
        )}
      </div>
    </section>
  );
}
