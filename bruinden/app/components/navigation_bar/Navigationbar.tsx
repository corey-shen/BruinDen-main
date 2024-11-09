import Container from "../Container";
import Logo from "./Logo";
import LogIn from "./LogIn";
import UserMenu from "./UserMenu";
import Search from "./Search";

const Navigationbar = () =>{
    return(
        <div className="fixed w-full z-10 shadow-xl" style={{ backgroundColor: '#33658A' }}>
            <div className = "py-4 border-b-[1px]">
                {/*contents are passed as children to Container*/}
                <Container>
                    <div className ="flex flex-row items-center justify-between gap-4 text-white">
                        {/*Adding a logo to the front*/}
                        <Logo/>

                        {/*Navigation bar options*/}
                        {/*TODO- ADD A HOME OPTION*/}
                        {/*TODO- ADD A ABOUT OPTION (TEXT ABOUT THE PROJECT)*/}
                        <Search/>
                        <LogIn/>
                        <UserMenu/>
                    </div>
                </Container>
            </div>    
        </div>
    );
}

export default Navigationbar;