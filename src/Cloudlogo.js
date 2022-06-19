import React from "react";
import Maps1 from './map1.jpg'
import Maps2 from './map2.jpg'
import Maps3 from './map3.jpg'
import Maps4 from './map4.jpg'


function Index() {
    return (
        <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Player unknown battle ground</h1>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">PUBG ini merupakan salah satu permainan battle royale yang bisa dimainkan melalui handphone atau pc.

Anda bisa mengajak teman untuk bergabung dalam tim atau menemui para pemain baru di dalam game saat sedang bermain.

Game PUBG adalah game online yang disebarluaskan oleh Tencent, di mana jumlah orang yang melakukan unduhan mencapai seratus juta lebih.

Sistem bermain PUBG ini last men standing, artinya pemain terakhir yang menang.

Pemain itu harus lebih dulu bertahan hidup dari serangan pemain lain.</p>
            </div>
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src={Maps1} alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src={Maps2} alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src={Maps3} alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                    <img src={Maps4} alt />
                </div>
            </div>
        </div>
    );
}

export default Index;
