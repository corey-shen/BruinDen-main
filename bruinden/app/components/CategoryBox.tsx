'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";
import { IconType } from "react-icons";
import { TbLetterR } from "react-icons/tb";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    description?: string; // Not following video, added to fix Categories.tsx bug
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {}; // Define empty query

        if (params) {   // Look through current params
            currentQuery = qs.parse(params.toString()); // Parse so they are an object, not a string
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if (params?.get('category') == label) { // Check if category is already selected
            delete updatedQuery.category;   // Deselect if clicked again
        }

        const url = qs.stringifyUrl({   // Generate URL string
            url: '/',                   // Pass path name
            query: updatedQuery         // Pass newest query
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover: text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} color = "white"/>
            <div className='font-medium text-sm text-white'>
                {label}
            </div>
        </div>
    );
}

export default CategoryBox;