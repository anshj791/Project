
import { Star, ShoppingCart,Heart } from 'lucide-react';
import { ProductGallery } from './components/ProductGallery';
import { ProductReviews } from './components/ProductReviews';
import { RelatedProducts } from './components/RelatedProducts';
import { SupplierInfo } from './components/SupplierInfo';
import { Footer } from './components/Footer';

const productImages = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974',
  'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=1974',
];

const mockReviews = [
  {
    id: 1,
    author: 'James Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    rating: 4.5,
    comment: 'These shoes are incredibly comfortable and stylish. Perfect for both casual wear and sports activities.',
    date: '2024-02-15',
  },
  {
    id: 1,
    author: 'James Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    rating: 4.5,
    comment: 'These shoes are incredibly comfortable and stylish. Perfect for both casual wear and sports activities.',
    date: '2024-02-15',
  },
  {
    id: 1,
    author: 'James Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    rating: 4.5,
    comment: 'These shoes are incredibly comfortable and stylish. Perfect for both casual wear and sports activities.',
    date: '2024-02-15',
  },
  {
    id: 1,
    author: 'James Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    rating: 4.5,
    comment: 'These shoes are incredibly comfortable and stylish. Perfect for both casual wear and sports activities.',
    date: '2024-02-15',
  },
  {
    id: 1,
    author: 'James Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    rating: 4.5,
    comment: 'These shoes are incredibly comfortable and stylish. Perfect for both casual wear and sports activities.',
    date: '2024-02-15',
  },
  {
    id: 1,
    author: 'James Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    rating: 4.5,
    comment: 'These shoes are incredibly comfortable and stylish. Perfect for both casual wear and sports activities.',
    date: '2024-02-15',
  },
  {
    id: 1,
    author: 'James Smith',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    rating: 4.5,
    comment: 'These shoes are incredibly comfortable and stylish. Perfect for both casual wear and sports activities.',
    date: '2024-02-15',
  },
 
];

const relatedProducts = [
  {
    id: 1,
    name: 'Sport Runner Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    price: 89.99,
  },
  {
    id: 1,
    name: 'Sport Runner Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    price: 89.99,
  },
  {
    id: 1,
    name: 'Sport Runner Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    price: 89.99,
  },
  {
    id: 1,
    name: 'Sport Runner Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    price: 89.99,
  },
  {
    id: 1,
    name: 'Sport Runner Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    price: 89.99,
  },
  {
    id: 1,
    name: 'Sport Runner Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    price: 89.99,
  },
  {
    id: 1,
    name: 'Sport Runner Pro',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070',
    price: 89.99,
  },
];

const Supplierinfo = [
  {
    name: "NIKE",
    rating: 1,
    reviews: 1,
    address: 'credall near bhat circule,Ahemdabad,Gujarat,India',
    openingHours: '4 hours',
  },

]

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
<header className="bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <h1 className="text-xl font-bold text-green-600">OneClick</h1>
    <div className="flex items-center gap-8">
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">New Listing</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Market</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
      </nav>
      <button className="text-gray-600 hover:text-gray-900">Login/Register</button>
    </div>
  </div>
</header>


      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductGallery images={productImages} />
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Round toe leather loafer shoe(Black)</h2>
                 <div className='flex gap-2'>
                 <Heart className='hover:text-red-800' />
                 <h3>Add To Wishlist</h3>
                 </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.8</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-500">$58.30</span>
                <button className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-700">
                  <ShoppingCart size={20} />
                   Buy Now
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Description</h3>
                  <p className="text-gray-600 mt-2">
                    Premium leather shoes with comfortable padding and stylish design. Perfect for both casual and formal occasions.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Specification</h3>
                    <dl className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Brand</dt>
                        <dd>Sports</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Type</dt>
                        <dd>Sporting Shoes</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-500">Color</dt>
                        <dd>Red</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <RelatedProducts products={relatedProducts} />
        </div>

        <div className='mt-16'>
        <SupplierInfo info={Supplierinfo} />

        </div>
        <div className="mt-16">
          <ProductReviews reviews={mockReviews} />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;