import React from "react";
import Image from "next/image";
import PizzaImage from "public/assets/pizzaImage.webp";

export default function PizzaCart() {
  const pizzaItems = [
    {
      id: 1,
      discountTag: 35,
      name: "Arizona Cream",
      description: "Made in Creamy sauce, Chicken Tikka, Onion, Cheese",
      price: 749,
      discountedPrice: 547,
      image: PizzaImage,
    },
    {
      id: 2,
      discountTag: 35,
      name: "Mighty Mexicana",
      description:
        "Made in Tomato sauce, Shredded chicken, Onions, Capsicum, Cheese",
      price: 499,
      discountedPrice: 347,
      image: PizzaImage,
    },
    // {
    //   id: 3,
    //   discountTag: 35,
    //   name: "Cheese Burst",
    //   description:
    //     "Made in Tomato sauce, Mozzarella cheese, Cheese burst crust",
    //   price: 649,
    //   discountedPrice: 500,
    //   image: PizzaImage,
    // },
    // {
    //   id: 4,
    //   discountTag: 35,
    //   name: "Burst",
    //   description: "Mozzarella cheese, Cheese burst crust",
    //   price: 649,
    //   discountedPrice: 550,
    //   image: PizzaImage,
    // },
    // {
    //   id: 5,
    //   discountTag: 30,
    //   name: "Cheese Burst",
    //   description: "Made in Tomato sauce, Mozzarella cheese",
    //   price: 599,
    //   discountedPrice: 430,
    //   image: PizzaImage,
    // },
    // {
    //   id: 6,
    //   discountTag: 30,
    //   name: "Fajita Pizza",
    //   description: "Made in Tomato sauce, Mozzarella cheese",
    //   price: 599,
    //   discountedPrice: 430,
    //   image: PizzaImage,
    // },
    // {
    //   id: 8,
    //   discountTag: 30,
    //   name: "Fajita Pizza",
    //   description: "Made in Tomato sauce, Mozzarella cheese",
    //   price: 599,
    //   discountedPrice: 430,
    //   image: PizzaImage,
    // },
  ];

  return (
    <div>
      {/* navbar */}
      <nav className="fixed z-20 top-0 w-full bg-white border-b-2 shadow-black-500 shadow-sm">
        <div className="flex items-center px-4 py-3">
          <h1 className="text-red-500 font-bold">California</h1>
          <h1 className="text-green-500">Pizza</h1>
        </div>
      </nav>
      {/* main content */}
      <main className="min-h-screen mt-24 lg:px-22 ">
        <div className="px-6 md:px-8">
          {" "}
          <div className="relative flex items-center border border-gray-300 rounded-full w-full">
            <input
              type="search"
              className="relative pl-12 border-none focus:ring-primary focus:ring-inset focus:outline-none bg-gray-200 px-2 py-2.5 rounded-full w-full"
              placeholder="Search Meaty Pizza"
            />
            <button
              type="submit"
              className="absolute md:right-auto left-0 md:left-auto flex items-center justify-center p-3 rounded-full hover:bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a.75.75 0 01-1.06 1.06l-4.817-4.817A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <section>
          <h1 className="py-12 lg:p-12 text-base text-center md:text-lg lg:text-3xl font-serif lg:mt-3 mb-[-19rem]">
            OVERLOAD MEATY PIZZA
          </h1>

          {/* pizza item cart selection */}
          <div className="px-4 md:px-10 lg:px-16">
            <div className="relative top-72 grid grid-cols-2 gap-4 md:gap-9 lg:grid-cols-3">
              {pizzaItems.map((pizzaItem) => (
                <article key={pizzaItem.id} className="relative flex flex-col">
                  <Image
                    src={pizzaItem.image}
                    alt="Pizza Image"
                    className="w-auto md:w-auto lg:w-auto z-30"
                    // style={{ borderRadius: "40px", maxWidth: "100%" }}
                    style={{
                      borderRadius: "20px", // Mobile border radius
                      maxWidth: "100%",
                      "@media (min-width: 640px)": {
                        borderRadius: "70px", // Desktop border radius
                      },
                    }}
                  />
                  <span
                    style={{ transform: "skewX(-20deg)" }}
                    className="absolute text-xs top-3 right-5 lg:top-12 lg:right-10 lg:left-30 p-1 bg-yellow-400 z-2 text-black lg:font-bold animate-pulse"
                  >
                    {pizzaItem.discountTag} OFF
                  </span>
                  <div
                    className="absolute z-10 bg-gray-100 text-xs w-full pt-2"
                    style={{ top: "calc(90% + 0px)" }}
                  >
                    <div className="">
                      <h3 className="">{pizzaItem.name}</h3>
                      <p className="">{pizzaItem.description}</p>
                    </div>

                    <div className="">
                      <div className="flex">
                        <p className="">From</p>
                        <p className="">
                          <del>Rs. {pizzaItem.price}</del>
                        </p>
                        <p className="">Rs.{pizzaItem.discountedPrice}</p>
                      </div>
                      <button className="block ml-auto mr-auto">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
