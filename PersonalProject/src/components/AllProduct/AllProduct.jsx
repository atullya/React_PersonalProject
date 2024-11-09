import React from "react";
import { useProductContext } from "../../ContextApi/ProductContext";
import { NavLink } from "react-router-dom";

export default function AllProduct() {
  let {products} = useProductContext();
  return (
    <div>
      <h1 className="text-center my-8 text-[32px] text-rose-700 font-semibold">
        All Product
      </h1>
      {products && products.length > 0 ? (
        <div className="grid p-[40px] lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
          {products.slice(0, 20).map((v, i) => {
            return <ProductCard key={i} prodetail={v} />;
          })}
        </div>
      ) : (
        <div className="skeleton-pulse h-24"></div>
      )}
    </div>
  );
}

function ProductCard({ prodetail }) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-[250px] sm:h-[300px]">
        <img
          src={prodetail.images[0]}
          alt={prodetail.title}
          className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
        />

        <img
          src={prodetail.images[1]}
          alt={prodetail.title}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="p-4">
        <div className=" text-black">
          <p className=" text-black">Price: ${prodetail.price}</p>
        </div>
        {/* <!-- Rating --> */}
        <div className="flex items-center">
          <svg
            className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            className="shrink-0 size-5 text-yellow-400 dark:text-yellow-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            className="shrink-0 size-5 text-gray-300 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
          <svg
            className="shrink-0 size-5 text-gray-300 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        </div>
        {/* <!-- End Rating --> */}
        <h3 className="text-lg font-semibold text-gray-800">
          {prodetail.title}
        </h3>
        <p className="mt-2 text-[17px] text-gray-600">
          {prodetail.description.slice(0, 200)}
        </p>
        <NavLink to={`/about1/${prodetail.id}`} state={{ indvdata: prodetail }}>
          <button className="mt-3 bg-black text-white px-4 py-2 text-xs uppercase font-medium">
            See Details
          </button>
        </NavLink>
      </div>
    </div>
  );
}
