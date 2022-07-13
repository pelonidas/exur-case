import React from "react";

interface ProductCardProps {
    title: string,
    subtitle: string,
    id: number
}

const ProductCard = ({title, subtitle, id}: ProductCardProps) => {
    return (
        <div className={'relative'}>
            <img src={`https://pfp-public-productdb-api.azurewebsites.net/api/picture/${id}`} alt="" className={'h-[150px] md:h-[300px] w-full object-cover'}/>
            <h5 className={'text-blue-600 font-medium my-[1rem]'}>{title}</h5>
            <div dangerouslySetInnerHTML={{__html: subtitle}}/>
            <span className={'bg-blue-400 absolute top-0 left-0 px-[0.5rem] rounded-br-lg text-white'}>Lorem ipsum</span>
        </div>
    )
}
export default ProductCard;
