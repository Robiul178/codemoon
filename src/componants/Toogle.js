
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import './CSS/Toogle.css'

const Toogle = () => {
    return (
        <div className="toogle">
            <SunIcon className="h-6 w-6 text-blue-500" />
            <MoonIcon className="h-6 w-6 text-blue-500" />
            <div className="t-button">

            </div>
        </div>
    );
};

export default Toogle;