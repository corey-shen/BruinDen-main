'use client';

import Container from "../Container";

import { MdAttachMoney } from "react-icons/md";
import { FaRulerCombined } from "react-icons/fa";
import { FaPersonWalking } from "react-icons/fa6";
import { MdBedroomParent } from "react-icons/md";
import { MdBathroom } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Price',
        icon: MdAttachMoney,
        description: 'This property is ___ price!'

    },
    {
        label: 'Square Feet',
        icon: FaRulerCombined,
        description: 'This property has ____ square feet!'
    },
    {
        label: 'Bedrooms',
        icon: MdBedroomParent,
        description: 'This apartment has ___ bedrooms!'

    },
    {
        label: 'Distance to campus',
        icon: FaPersonWalking,
        description: 'This apartment is close to campus!'
    },
    {
        label: 'Bathrooms',
        icon: MdBathroom,
        description: 'This apartment has ___ bathrooms!'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div 
                className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
                "
            >
                {categories.map((item) => (
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category == item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;