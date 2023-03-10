import React, { useState } from "react";

function ShoppingCart() {
  const products = [
    {
      id: 1,
      name: "Elma",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg",
      price: 5,
    },
    {
      id: 2,
      name: "Armut",
      image:
        "https://static.ticimax.cloud/38693/uploads/urunresimleri/santa-maria-armut-kilo-2d390-.jpg",
      price: 7,
    },
    {
      id: 3,
      name: "Muz",
      image:
        "http://www.cagri.com/Uploads/UrunResimleri/buyuk/muz-yerli-kg-4498-8.jpg",
      price: 15,
    },
    {
      id: 4,
      name: "Kivi",
      image:
        "https://www.tekfentarim.com/wp-content/uploads/2021/08/fresh-kiwi-fruit-isolated-7.png",
      price: 13,
    },
    {
      id: 5,
      name: "Karpuz",
      image:
        "https://i.cnnturk.com/i/cnnturk/75/740x416/60f2a27d5cf3b00bd0f5ed7e.jpg",
      price: 4,
    },
  ];
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);

    if (existingCartItem) {
      // setCartItemCount(cartItemCount + 1);
      // setCartTotalPrice(cartTotalPrice + product.price);
    } else {
      setCart([...cart, product]);
      setCartItemCount(cartItemCount + 1);
      setCartTotalPrice(cartTotalPrice + product.price);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    const removedProduct = products.find((product) => product.id === productId);
    setCartItemCount(Math.max(0, cartItemCount - 1));
    setCartTotalPrice(Math.max(0, cartTotalPrice - removedProduct.price));
  };
  const removeAllFromCart = () => {
    setCart([]);
    setCartItemCount(0);
    setCartTotalPrice(0);
  };

  const productList = products.map((product) => {
    return (
      <div className="ürün" key={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price} TL</p>
        <button onClick={() => addToCart(product)}>Sepete Ekle</button>
      </div>
    );
  });

  const cartList = cart.map((item) => {
    return (
      <div className="inSepet" key={item.id}>
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name} />
        <p>Fiyat: {item.price} TL</p>
        <button onClick={() => removeFromCart(item.id)}>Ürün Sil</button>
      </div>
    );
  });
  return (
    <div className="all">
      <div className="container">
        <h2>Ürün Listesi</h2>
      </div>
      <div className="container">{productList}</div>
      <h2 className="container">Sepetim</h2>
      <div className="detail">
        <p>Ürün Sayisi: {cartItemCount}</p>
        <p>Toplam Fiyat: {cartTotalPrice}</p>
      </div>

      <div className="sepet">
        {cartList.length > 0 ? cartList : "Henüz ürün yok!"}
        <button className="bosalt" onClick={removeAllFromCart}>
          Sepeti boşalt!
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
