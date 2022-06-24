/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

/*
import Set1 from './Baju1.jpg'
import Set2 from './Baju2.jpg'
import Set3 from './Baju3.jpg'
import Set4 from './Baju4.jpg'
import Set5 from './Baju5.jpg'
import Set6 from './Baju6.jpg'
import Set7 from './Baju7.jpg'
import Set8 from './Baju8.jpg'
*/
import React, { useState, useEffect } from 'react';
// import API from './Api';
import Axios from 'axios';
import Navbar from './Navbar'
import Footer from './Footer'

// const Product = [
//     {
//       id: 1,
//       name: 'Dune Speedster Set',
//       href: '#',
//       imageSrc:'http://drive.google.com/uc?export=view&id=1DaAUeSw3CKn0yE_7u72aJOOme0FCIbfq',
//       price: '1050 UC',
//     },
//     {
//       id: 2,
//       name: 'Frog Prince Set',
//       href: '#',
//       imageSrc: 'http://drive.google.com/uc?export=view&id=1DZOOUnXH1u7YmKNmGTsxVVeTZHFNiBYh',
//       price: '1400 UC',
//     },
//     {
//       id: 3,
//       name: 'Orange Zebra SET',
//       href: '#',
//       imageSrc: 'http://drive.google.com/uc?export=view&id=1DXTy6qAvtphz298CHiplV8qo-sANi2Qu',
//       price: '116 UC',
//     },
//     {
//       id: 4,
//       name: 'Maleficent Rabbit Set',
//       href: '#',
//       imageSrc: 'http://drive.google.com/uc?export=view&id=1DVoGZSNzrQai73mwhCPdC9rPllWqFIXB',
//       price: '1980 UC',
//     },
//     {
//       id: 5,
//       name: 'Racing Animal Set',
//       href: '#',
//       imageSrc: 'http://drive.google.com/uc?export=view&id=1DQifvEiGjVRPUHiBzbpMNu1W-GsONzUJ',
//       price: '116 UC',
//     },
//     {
//       id: 6,
//       name: 'Tender Cactus Set',
//       href: '#',
//       imageSrc: 'http://drive.google.com/uc?export=view&id=1DOMl1skUMbopEgBNFtsVdc9btJXd4FRH',
//       price: '2100 UC',
//     },
//     {
//       id: 7,
//       name: 'Caribou Mercenary Set',
//       href: '#',
//       imageSrc: 'http://drive.google.com/uc?export=view&id=1DJgR-DcX1nFg2eGTsXCIG2zVZuvEio4l',
//       price: '2100 UC',
//     },
//     {
//       id: 8,
//       name: 'Red Streak Set',
//       href: '#',
//       imageSrc: 'http://drive.google.com/uc?export=view&id=1DCe-KzoPDzkK4DhCNVfE1FC9nRWzH3_F',
//       price: '315 UC',
//     },
    
//     // More products...
//   ]
  
  export default function Example() {
    const [market, setMarket] = useState([]);

    useEffect(() => {
        getMarket()
    }, []);

    const getMarket = () => {
        Axios.get(`https://raw.githubusercontent.com/Agasta04/APIweb/main/Market.json`)
            .then(res => {
                const data = res.data;
                setMarket(data.market)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
      <div className="bg-white">
        <Navbar/>
        {/* <API/> */}
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl text-center font-extrabold tracking-tight text-gray-900">Outfits Skin</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {market.map((market) => (
              <div key={market.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={market.url}
                   // alt={market.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={market.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {market.name}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{market.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{market.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  