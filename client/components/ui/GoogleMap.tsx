interface GoogleMapProps {
  address: string;
  restaurantName?: string;
  height?: string;
}

export default function GoogleMap({
  address,
  restaurantName = "Restaurant Location",
  height = "400px",
}: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-lg">
      <iframe
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title={restaurantName}
        src={mapUrl}
      />
    </div>
  );
}
