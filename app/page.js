export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Sri Brothers Sofa
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Premium Sofa Manufacturing with Stylish Modern Designs,
              Comfort, and Quality Craftsmanship.
            </p>

            <button className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Explore Collection
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Sofa"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mt-4">
              We provide modern sofa solutions with premium quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Premium Quality
              </h3>

              <p className="text-gray-600">
                Durable materials with long lasting comfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Modern Designs
              </h3>

              <p className="text-gray-600">
                Stylish sofa collections for modern homes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Affordable Price
              </h3>

              <p className="text-gray-600">
                Luxury sofa designs at reasonable prices.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SOFA COLLECTION */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Our Sofa Collection
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop"
                alt="Sofa"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Modern Sofa
                </h3>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop"
                alt="Sofa"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Luxury Recliner
                </h3>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop"
                alt="Sofa"
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Designer Sofa
                </h3>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-gray-100">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              About Sri Brothers Sofa
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Sri Brothers Sofa Manufacturing specializes in creating premium-quality
              customized sofas with stylish designs and exceptional comfort.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-black text-white py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-10">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">

            <div className="bg-gray-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">
                Address
              </h3>

              <p className="text-gray-300">
                Kalan Pannai, Karumapuram Post,
                <br />
                Vazhapaddy Taluk,
                <br />
                Salem District - 636106
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-4">
                Contact
              </h3>

              <p>📞 94894 73511</p>
              <p>📞 93441 86881</p>
              <p>✉️ sribrotherssofa@gmail.com</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}