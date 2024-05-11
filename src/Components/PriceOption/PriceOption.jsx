import PropTypes from 'prop-types';
import { GrCheckboxSelected } from "react-icons/gr";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-black text-white p-8 rounded-2xl flex flex-col'>
            <h1>
                <span className='text-4xl font-bold text-yellow-600'>{price}</span>
                <span>/mon</span>
            </h1>
            <h3 className='text-yellow-200 mt-2'>{name}</h3>
            <h4 className='my-4 flex-grow'>
                {
                    features.map((feature, idx) => <p key={idx} className='flex items-center gap-2 text-green-600'><GrCheckboxSelected /><span className='text-white'>{feature}</span></p>)
                }
            </h4>
            <button className='bg-green-600 w-full rounded-2xl py-2 text-black font-bold hover:bg-green-900'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;