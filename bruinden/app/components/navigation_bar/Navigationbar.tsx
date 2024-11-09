import Container from "../Container";
import Logo from "./Logo";

const Navigationbar = () =>{
    return(
        <div className = "fixed w-full z-10 shadow-sm" style = {{backgroundColor: '#33658A'}}>
            <div
                className = "py-4 board-b-[1px]"
            >
                {/*contents are passed as children to Container*/}
                <Container>
                    <div className ="flex flex-row items-center justify-between gap-3 md:gap-0">
                        {/*Adding a logo to the front*/}
                        <Logo />
                    </div>
                    Tester Text
                </Container>

            </div>    
        </div>
    );
}

export default Navigationbar;