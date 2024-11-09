'use client';

const LogIn = () => {
    return (
        <div 
            className="
            w-full 
            md:w-auto
            py-2
            hover:shadow-md
            transition
            cursor-pointer
            px-6
            "
        >
            <div className="
            flex
            flex-row
            items-center
            justify-between
            space-x-6
            ">
                <div className="text-xl" style={{ fontSize: '30px' }}>
                    Sign In
                </div>
            </div>
        </div>
    );
}

export default LogIn;