export function Product({ product }) {
  if (!product || product.length === 0) return <h1>Loading...</h1>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
      <div className="flex  flex-wrap justify-center">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className="m-4 p-4 w-2xs border-b-amber-900 border-2 rounded-lg shadow-md hover:shadow-emerald-700 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover "
              />
              <h2 className="text-lg font-bold mt-1">{item.title}</h2>

              <p className="text-green-500 mt-2 font-bold">${item.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
