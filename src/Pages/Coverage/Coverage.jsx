import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();

 // console.log(serviceCenters);

  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;

    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const coord = [district.latitude, district.longitude];

      // console.log(district, coord)

      //user go to location
      mapRef.current.flyTo(coord, 12);
    }
  };

  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8">
      {/* title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
        The Books Are Available For All Homes in 64 Districts
      </h2>

      {/* search */}
      <div className="py-4 flex justify-center">
        <form onSubmit={handleSearch} className="w-full sm:w-3/4 md:w-1/2">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              className="h-4 w-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </g>
            </svg>
            <input
              type="search"
              name="location"
              placeholder="Search district..."
              className="grow text-sm sm:text-base"
            />
          </label>
        </form>
      </div>

      {/* map */}
      <div className="w-full border-2 rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="
        w-full
        h-[300px]
        sm:h-[400px]
        md:h-[500px]
        lg:h-[650px]
      "
          ref={mapRef}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong>
                <br />
                Service Area: {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
