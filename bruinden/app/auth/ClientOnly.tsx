'use client';

import {useEffect, useState} from "react";

interface ClientOnlyProperties{
    children: React.ReactNode;
}
//check if in server side rending
const ClientOnly : React.FC<ClientOnlyProperties> = ({
    children
}) => {
    const[hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        }, [] );

    //if application has not mounted, then return null
    if (!hasMounted){
        return null;
    }

    //otherwise if it is mounted
    return(
        <>
        {children}
        </>

    );
}

export default ClientOnly;