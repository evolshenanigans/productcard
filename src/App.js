import "./App.css";
import img from "../src/images/image-product-desktop.jpg";
import cart from '../src/images/icon-cart.svg';
function App() {
  return (
    <article>
      <picture>
        <source media="(min-width: 616px)" src={img}/>
        <img src={img} alt="" />
      </picture>
      <div className="card-main-content">
        <span className="card-category">Perfume</span>
        <h1 className="card-heading">Gabrielle Essence Eau De Parfum</h1>
        <p className="card-description">
          A floral, solar and voluptuous interpretation composed by Olivier Poige, Perfumer-Creator for the House of CHANEL
        </p>
        <div className="card-price-container">
          <p className="card-price">149.99</p>
          <del className="card-price"><span className="sr-only">Previous Price</span>169.99</del>
        </div>
        <button>
          <img src={cart} alt="" aria-hidden="true" /> Add to Cart
        </button>
      </div>
    </article>
  );
}

export default App;
