import React from 'react';
import Sidebar from "../components/Sidebar";

function HomePage() {
    return (
        <div className={'bg-[#FBFBFB] h-screen'}>
            <div className={'font-primary flex gap-[5%] pt-[5rem] mx-[1rem] '}>
                <Sidebar/>
                <div className={'w-[70%]'}>
                    <h1 className={'text-[2rem] font-medium text-blue-600'}>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Cupiditate, placeat.</h1>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
