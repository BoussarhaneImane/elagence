
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/34.jpg'
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Découvrez votre beauté naturelle</h1>
            <p className="text-xl mb-8">Des produits cosmétiques et des huiles essentielles de haute qualité pour sublimer votre beauté naturelle.</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-rose-700 text-white px-6 py-3 rounded-full hover:bg-rose-800 transition-colors"
            >
              Découvrir nos produits
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Nos Catégories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?auto=format&fit=crop&q=80"
                alt="Huiles Essentielles"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Huiles Essentielles</h3>
                  <p className="opacity-90">Des huiles pures et naturelles</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&q=80"
                alt="Soins Visage"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Soins Visage</h3>
                  <p className="opacity-90">Pour une peau rayonnante</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80"
                alt="Cosmétiques Bio"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-semibold mb-2">Cosmétiques Bio</h3>
                  <p className="opacity-90">100% naturel et bio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-rose-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12 text-white">Produits Vedettes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Huile d'Argan Pure",
                price: "29,99 €",
                image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80"
              },
              {
                name: "Crème Hydratante",
                price: "34,99 €",
                image:img1
              },
              {
                name: "Sérum Vitamine C",
                price: "45,99 €",
                image:img2
              },
              {
                name: "Huile Essentielle Lavande",
                price: "19,99 €",
                image:img3
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
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
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Pourquoi Nous Choisir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-28 h-28 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80"
                  alt="Natural"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Naturel</h3>
              <p className="text-gray-600">Des produits issus de l'agriculture biologique et respectueux de l'environnement.</p>
            </div>
            <div className="p-6">
              <div className="w-28 h-28 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={img1}
                  alt="Quality"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Haute Qualité</h3>
              <p className="text-gray-600">Des ingrédients sélectionnés avec soin et testés pour leur efficacité.</p>
            </div>
            <div className="p-6">
              <div className="w-28 h-28 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src={img2}
                  alt="Expert"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-gray-600">Une équipe d'experts passionnés pour vous conseiller au mieux.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;