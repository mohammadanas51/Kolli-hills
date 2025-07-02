import * as React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import TestimonialCard from "./TestimonialCard";
import Footer from "./Footer";

export default function SpicesLayout() {
  const [cartCount, setCartCount] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState("");

  const products = [
    { id: 1, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aee6b5b8cc94ff060a19d251fcdb7a19968094aea60a4ba4165da42beae8efac?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Honey", price: "9.99" },
    { id: 2, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbd3d9a8cbfafc1d604e133159a0e3c0121c240d71013f13fc53c56b34243855?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Coffee powder", price: "9.99" },
    { id: 3, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/03b02c7e000588c9c0f6a3b1c2f2f03785fa1c21e8cd5ae5acac67692ac4fed5?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Cinnamon", price: "9.99" },
    { id: 4, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfd46d1c8b633aede3adacf97d7668a1490aeea1787d28e8dd3c21178b220243?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Product name", price: "9.99" },
    { id: 5, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5adf7d0c1684082ff346ba2085c46d00884d76e5075169ae4ca51214f89e452a?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Fragrant Cinnamon", price: "9.99" },
    { id: 6, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/79d4d677b5cbbd723d07ceaefe377a2c18d89c2ca8bf621dc2bee8f2709c2c0c?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Summer Cherries", price: "9.99" },
    { id: 7, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a08bfdd06aa6e1dc1ca7a5088dc5667ee50222cba175e9c6e84e6418ee8f81a?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Clean Lavander", price: "9.99" },
    { id: 8, image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a08bfdd06aa6e1dc1ca7a5088dc5667ee50222cba175e9c6e84e6418ee8f81a?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f", name: "Clean Lavander", price: "9.99" }
  ];

  const testimonials = [
    {
      id: 1,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c77eca1106248ff18e6b52b27f71205f8ba90889f81c6a377ee24d5d8f76cf2?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/c63bf18aaabf0b6b57ae09d5cba6cf78f1214296988b4875ccbcfb88734da504?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f",
      quote: "I love it!",
      author: "Luisa"
    },
    {
      id: 2,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/71000f95c02a1a0bebb60c55e02f738680cbaf0be387d5b93ef0a0a50ec51a03?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0323825e6fa0e6599263fa49fdf2e7f39c15bc248740ea9caf2f39c1e5357e8?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f",
      quote: "Recommended for everyone",
      author: "Edoardo"
    },
    {
      id: 3,
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a713ad593c61f161d72d6315c8775643b9c0e060cac59f1d2644aa2705f3295?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f",
      rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e45288c6c8229a81c6651ad69a851256edc5cf008c86ad1d0ae7081d0b86691?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f",
      quote: "Very natural, the taste is awesome",
      author: "Mart"
    }
  ];

  const handleAddToCart = (productId) => {
    setCartCount(prev => prev + 1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="spices-layout">
      <Header cartCount={cartCount} onSearch={handleSearch} />
      
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeba18467b0822445e02017f325af27f92704b704d5faf16815acdd4a9e5aaa6?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f" 
            alt="" 
            className="hero-background" 
            role="presentation" 
          />
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title">
              🌱 <span className="visually-hidden">Welcome to Spices</span>
              <br />
              The only place to go for spices
            </h1>
            <p className="hero-description">
              Spices that Reflect the Richness of Our Culture
            </p>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              Discover our collection
            </button>
          </div>
        </section>

        <section id="products" className="products-section" aria-labelledby="products-title">
          <h2 id="products-title" className="section-title">Products</h2>
          <p className="section-description">
            Order it for you or for your beloved ones
          </p>
          <div 
            className="products-grid"
            role="list"
          >
            {products.map(product => (
              <div key={product.id} role="listitem">
                <ProductCard 
                  {...product} 
                  onAddToCart={() => handleAddToCart(product.id)}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="recipe-section" aria-labelledby="recipe-title">
          <div className="recipe-content">
            <h2 id="recipe-title" className="section-title">Recipe of the day</h2>
            <h3>Turmeric Milk (Golden Milk)</h3>
            <div className="recipe-details">
              <h4>Ingredients</h4>
              <ul>
                <li>1 cup milk (or plant-based)</li>
                <li>1/2 tsp turmeric powder</li>
                <li>A pinch of black pepper</li>
                <li>Honey or jaggery (to taste)</li>
              </ul>
              <h4>Instructions</h4>
              <ol>
                <li>Heat the milk in a saucepan.</li>
                <li>Add turmeric and a pinch of black pepper. Stir well.</li>
                <li>Sweeten with honey or jaggery, and serve warm.</li>
              </ol>
              <button className="cta-button">Learn more</button>
            </div>
          </div>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7a5db0fd2d6ba5aa5ed87a8db393f9ee653408eb5af141b0069b144fe807628?placeholderIfAbsent=true&apiKey=350561c8550741129c0f2157250ece9f" 
            alt="Golden milk preparation" 
            className="recipe-image"
          />
        </section>

        <section className="testimonials-section" aria-labelledby="testimonials-title">
          <h2 id="testimonials-title" className="section-title">Testimonials</h2>
          <p className="section-description">
            Some quotes from our happy customers
          </p>
          <div 
            className="testimonials-grid"
            role="list"
          >
            {testimonials.map(testimonial => (
              <div key={testimonial.id} role="listitem">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}