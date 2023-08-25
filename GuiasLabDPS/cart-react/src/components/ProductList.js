import React from "react";
import { data } from "../data";
import Modal from "react-modal";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectProduct, setSelectProduct] = React.useState({
    id: 1,
    title: "Cien años de soledad",
    price: 100,
    urlImage: "https://images.penguinrandomhouse.com/cover/9780525562443",
    quantity: 1,
    descripcion: "",
  });

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  const showBookInfo = (product) => {
    setSelectProduct(product);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img
              src={product.urlImage}
              alt={product.title}
              onClick={() => showBookInfo(product)}
            />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              Añadir al carrito
            </button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Detalle libro"
          >
            <div className="item" key={selectProduct.id}>
              <figure>
                <img src={selectProduct.urlImage} alt={selectProduct.title} />
              </figure>
              <div className="info-product">
                <h2>{selectProduct.nameProduct}</h2>
                <p className="price">${selectProduct.price}</p>
                <p className="price">${selectProduct.descripcion}</p>
                <button onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </Modal>
        </div>
      ))}
    </div>
  );
};
