module.exports = (app) => {
  const getProductsBySearch = async (req, res) => {
    const { search } = req.body;

    const products = [
      {
        name: "Bruttal - Primeira Temporada Completa",
        urlImage: "/assets/brutalBook.jpg",
        price: 60.0,
      },
      {
        name: "Batarang - Edição Especial",
        urlImage: "/assets/batarang.jpg",
        price: 99.9,
      },
      {
        name: "Kit Bruttal - Camiseta corner box",
        urlImage: "/assets/brutalShirt.jpg",
        price: 140.0,
      },
      {
        name: "Moleskine James Bond - Títulos",
        urlImage: "/assets/007Book.jpg",
        price: 99.95,
      },
    ];

    try {
      let currProducts = [];

      if (!search) {
        return res.status(200).send(products);
      } else {
        products.map((item) => {
          if (item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
            currProducts.push(item);
          }
        });
        if (!currProducts[0]) {
          currProducts = products;
        }
        return res.status(200).send(currProducts);
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  };

  return { getProductsBySearch };
};
