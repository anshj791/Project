import { Star, Clock } from 'lucide-react';

interface SupplierI {
  name: string;
  rating: number;
  reviews: number;
  address: string;
  openingHours: string;
}

interface SupplierInfoProps {
  info: SupplierI[];
}

export function SupplierInfo({ info }: SupplierInfoProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {info.map((supplier, index) => (
        <div key={index} className="w-[500px] border rounded-lg p-4 space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Store"
              className="w-full h-full object-cover"
            />
          </div>

          <button className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition-colors">
            Follow
          </button>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{supplier.name}</h3>
              <div className="flex items-center gap-1">
                <span className="font-semibold">{supplier.rating}</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-500">({supplier.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-gray-600">{supplier.address}</p>

            <div className="flex items-start gap-2 text-gray-600">
              <Clock className="w-4 h-4 mt-1" />
              <div>
                <p className="font-medium">Open Now:</p>
                <p>{supplier.openingHours}</p>
              </div>
            </div>
          </div>

          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors">
            About Supplier
          </button>
        </div>
      ))}
    </div>
  );
}
