import React from 'react';
import Sidebar from "../components/Sidebar";
import {ProductOverview} from "../features/products/ProductOverview";

function HomePage() {
    return (
        <div className={'bg-[#FBFBFB] md:h-screen'}>
            <div className={'font-primary flex flex-col md:flex-row gap-[5%] py-[2rem] md:py-[5rem] px-[1rem] '}>
                <Sidebar/>
                <div className={'mt-[2rem] md:mt-0 md:w-[70%]'}>
                    <h1 className={'text-[2rem] font-medium text-blue-600'}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Cupiditate, placeat.</h1>
                    <p className={'mt-[2rem]'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi delectus ducimus
                        enim eveniet facere facilis harum id, impedit iste laboriosam magni, obcaecati officiis
                        provident quo rem repellendus sit vero.
                    </p>
                    <p className={'mt-[2rem] mb-[4rem]'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi delectus ducimus
                        enim eveniet facere facilis harum id, impedit iste laboriosam magni, obcaecati officiis
                        provident quo rem repellendus sit vero.
                    </p>
                    <ProductOverview/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
