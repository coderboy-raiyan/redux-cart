/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import Currency from "react-currency-formatter";
import { BsStarFill } from "react-icons/bs";
/* eslint-disable react/no-array-index-key */

const MAX_NUMBER = 5;
const MIN_NUMBER = 1;

function SingleProduct({ item }: { item: any }) {
    const [ratings] = useState(
        Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + 1) + MIN_NUMBER
    );

    const quantity = 0;

    return (
        <div className="relative m-5 flex flex-col  bg-white p-10 shadow">
            <img className="mx-auto h-[200px] w-[200px] object-contain" src={item.image} alt="" />
            <h1 className="my-3">{item.title}</h1>

            <span className="absolute right-2 top-1 text-sm text-gray-500">{item.category}</span>

            <div className="flex space-x-1 text-yellow-400">
                {Array(ratings)
                    .fill("")
                    .map((_, i) => (
                        <span key={i}>
                            <BsStarFill />
                        </span>
                    ))}
            </div>

            <p className="my-2 text-xs line-clamp-2">{item.description}</p>

            <p className="mb-4 text-sm font-semibold">
                <Currency quantity={item.price} currency="USD" />
            </p>

            {/* buttons */}
            <div className="mt-auto">
                {quantity === 0 ? (
                    <button
                        className=" w-full rounded bg-yellow-400 py-2 text-sm font-semibold"
                        type="button"
                    >
                        Add to Cart
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default SingleProduct;