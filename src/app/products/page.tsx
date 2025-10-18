const Products = () => {
  const products = [
    {
      id: "1",
      name: "Mobile",
      price: 500,
    },
    {
      id: "2",
      name: "Laptop",
      price: 2500,
    },
    {
      id: "3",
      name: "Watch",
      price: 4999,
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid gap-4">
        {products.map((product) => (
          <div className="border p-4 rounded" key={product.id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
