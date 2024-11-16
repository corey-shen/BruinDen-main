'use client';
import React from "react";
import Link from "next/link";

interface MenuItemProporties{
    onClick:() => void;
    label: string;
    reference: string;
}
const MenuItem: React.FC<MenuItemProporties> = ({
    onClick, label, reference
}) => {
    return(
    /* when you click on a certain menu item it processes the click*/
        <Link href = {reference} onClick = {onClick} className="px-4 py-3 hover:bg-neutral-100 transition">
            {label}
        </Link>
    );
}
export default MenuItem;