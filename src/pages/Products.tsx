
import { Filter, ChevronDown } from 'lucide-react';
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/34.jpg'

function Products() {
  const categories = ['Tous', 'Huiles Essentielles', 'Soins Visage', 'Soins Corps', 'Aromathérapie'];
  const products = [
    {
      name: "Huile d'Argan Pure",
      category: "Huiles Essentielles",
      price: "29,99 €",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80"
    },
    {
      name: "Crème Hydratante",
      category: "Soins Visage",
      price: "34,99 €",
      image: img1
    },
    {
      name: "Sérum Vitamine C",
      category: "Soins Visage",
      price: "45,99 €",
      image: img2
    },
    {
      name: "Huile Essentielle Lavande",
      category: "Aromathérapie",
      price: "19,99 €",
      image: img3
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif mb-8">Nos Produits</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center">
          <Filter size={20} className="mr-2" />
          <span className="font-medium">Filtres:</span>
        </div>
        {categories.map((category, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-full border border-rose-200 hover:bg-rose-50 transition-colors"
          >
            {category}
          </button>
        ))}
        <div className="ml-auto">
          <button className="flex items-center px-4 py-2 border rounded hover:bg-gray-50">
            Trier par
            <ChevronDown size={20} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-rose-600">{product.category}</span>
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-rose-700 font-medium">{product.price}</p>
              <button className="mt-4 w-full bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-800 transition-colors">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;