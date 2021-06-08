import Product from "./Product";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-7 mx-4 md:mx-5 lg:mx-7 -mt-14 md:-mt-32">
            {products.slice(0, 4).map(({ id, title, price, description, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            ))}
            <img className="md:col-span-full" src="https://i.imgur.com/98nxN0W.jpg" alt="Ad" />
            <div className="md:col-span-2">
                {products.slice(4, 5).map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
            </div>
            {products
                .slice(5, products.length)
                .map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))}
        </div>
    );
}

export default ProductFeed;
