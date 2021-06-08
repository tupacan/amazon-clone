import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({ id, title, price, description, category, image }) {
    // using a random number to emulate product rating, since the API hasn't one
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    // randomly set Amazon Prime to products
    const [hasPrime] = useState(Math.random() < 0.5);

    return (
        <div className="relative flex flex-col bg-white z-30 p-6">
            <p className="absolute top-2 right-2 text-sm italic text-gray-500">{category}</p>
            <Image src={image} width={200} height={200} objectFit="contain" />
            <h3 className="my-4 font-bold">{title}</h3>

            <div className="flex mt-auto">
                {/* emulate rating system using the random number */}
                {Array(rating)
                    .fill()
                    .map((_, i) => {
                        return <StarIcon key={i} className="h-5 text-yellow-500" />;
                    })}
            </div>
            <p className="text-sm my-2 line-clamp-2">{description}</p>

            <div className="mb-5 text-lg font-medium">
                <Currency quantity={price} currency="EUR" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-3 mb-4 md:mb-5">
                    <img className="w-14" src="https://i.imgur.com/MQLaNf7.png" alt="Prime Logo" />
                    <p className="text-xs text-gray-500">Free Same-Day Delivery</p>
                </div>
            )}
            <button className="button">Add to Basket</button>
        </div>
    );
}

export default Product;
