import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const routes = [
        {
            "id": 1,
            "path": "/route1",
            "name": "Route One"
        },
        {
            "id": 2,
            "path": "/route2",
            "name": "Route Two"
        },
        {
            "id": 3,
            "path": "/route3",
            "name": "Route Three"
        },
        {
            "id": 4,
            "path": "/route4",
            "name": "Route Four"
        },
        {
            "id": 5,
            "path": "/route5",
            "name": "Route Five"
        }
    ]
    const [open, setOpen] = useState(false);

    return (
        <nav className='m-8 flex justify-center'>
            <div className='md:hidden bg-yellow-600 p-4 font-semibold w-full' onClick={() => setOpen(!open)}>
                {
                    open === true ? <RxCross2 /> : <CiMenuBurger /> 
                }
            </div>
            <ul className={`md:flex justify-center duration-1000 absolute md:static ${open ? 'top-16' : '-top-60'} bg-yellow-600 p-4 md:w-full font-semibold`}>
                {
                    routes.map(route => <li key={route.id} className="mr-4 hover:bg-yellow-400"><a href={route.path}>{route.name}</a></li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;