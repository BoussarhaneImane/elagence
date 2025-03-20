import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full z-50 p-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button
                  className="sm:hidden p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <Link to="/" className="font-bold text-2xl text-rose-700">Élégance.</Link>
              </div>

              <div className="hidden sm:flex items-center space-x-16 font-medium">
                <Link to="/" className="text-gray-700 hover:text-rose-700">Accueil</Link>
                <Link to="/products" className="text-gray-700 hover:text-rose-700">Produits</Link>
                <Link to="/about" className="text-gray-700 hover:text-rose-700">À Propos</Link>
                <Link to="/contact" className="text-gray-700 hover:text-rose-700">Contact</Link>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 hover:text-rose-700">
                  <Search size={20} />
                </button>
                <button className="p-2 hover:text-rose-700">
                  <Heart size={20} />
                </button>
                <button className="p-2 hover:text-rose-700">
                  <ShoppingBag size={20} />
                </button>
                <button className="p-2 hover:text-rose-700">
                  <User size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="sm:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  to="/products"
                  className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produits
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À Propos
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 hover:bg-rose-50 hover:text-rose-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-rose-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-serif text-2xl mb-4">Élégance</h3>
                <p className="text-rose-100">Votre destination beauté pour des produits cosmétiques naturels et de qualité.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-rose-100 hover:text-white">Accueil</Link></li>
                  <li><Link to="/products" className="text-rose-100 hover:text-white">Produits</Link></li>
                  <li><Link to="/about" className="text-rose-100 hover:text-white">À Propos</Link></li>
                  <li><Link to="/contact" className="text-rose-100 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-rose-100">
                  <li>123 Rue de la Beauté</li>
                  <li>75001 Paris, France</li>
                  <li>Tél: +33 1 23 45 67 89</li>
                  <li>Email: contact@elegance.com</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-3 py-2 bg-rose-800 text-white placeholder-rose-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                  <button className="w-full bg-white text-rose-900 px-4 py-2 rounded hover:bg-rose-100 transition-colors">
                    S'abonner
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-rose-800 mt-8 pt-8 text-center text-rose-100">
              <p>&copy; 2024 Élégance. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;