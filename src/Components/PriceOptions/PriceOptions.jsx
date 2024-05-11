import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Product A",
          "features": ["Waterproof design", "Wireless charging", "Voice control"],
          "price": 99.99
        },
        {
          "id": 2,
          "name": "Product B",
          "features": ["Biometric security", "Foldable design", "Eco-friendly materials"],
          "price": 149.99
        },
        {
          "id": 3,
          "name": "Product C",
          "features": ["Augmented reality support", "Self-cleaning technology", "Gesture recognition"],
          "price": 199.99
        }
      ]
      
    return (
        <div>
            <h2 className="text-5xl text-center font-semibold">Best Prices in The Town</h2>
            <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-8 m-8" >
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;