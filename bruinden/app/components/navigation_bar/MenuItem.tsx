'use client';
interface MenuItemProporties{
    onClick:() => void;
    label: string;
}
const MenuItem: React.FC<MenuItemProporties> = ({
    onClick, label
}) => {
    return(
    /* when you click on a certain menu item it processes the click*/
        <div onClick = {onClick} className="px-4 py-3 hover:bg-neutral-100 transition">
            {label}
        </div>
    );
}
export default MenuItem;