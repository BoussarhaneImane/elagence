
function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-xl">
            <h1 className="font-serif text-5xl mb-6">Notre Histoire</h1>
            <p className="text-xl">Découvrez l'histoire d'Élégance et notre engagement envers la beauté naturelle.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Notre Passion</h2>
              <p className="text-gray-600 mb-4">
                Fondée en 2020, Élégance est née d'une passion pour les produits cosmétiques naturels et les huiles essentielles. Notre mission est de proposer des produits de haute qualité qui respectent à la fois votre peau et l'environnement.
              </p>
              <p className="text-gray-600">
                Nous collaborons avec des producteurs locaux et des experts en cosmétique pour vous offrir le meilleur de la nature. Chaque produit est soigneusement sélectionné et testé pour garantir son efficacité et sa qualité.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80"
                alt="Notre histoire"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Naturel</h3>
              <p className="text-gray-600">
                Nous privilégions les ingrédients naturels et biologiques pour tous nos produits.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Éthique</h3>
              <p className="text-gray-600">
                Nous nous engageons à respecter l'environnement et à promouvoir le commerce équitable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Qualité</h3>
              <p className="text-gray-600">
                Chaque produit est rigoureusement testé pour garantir son efficacité et sa sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Martin",
                role: "Fondatrice",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              },
              {
                name: "Marie Dubois",
                role: "Experte en Cosmétique",
                image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?auto=format&fit=crop&q=80"
              },
              {
                name: "Claire Bernard",
                role: "Aromathérapeute",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;