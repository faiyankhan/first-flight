export default function CardContainer(props) {
    const {name, price, brand, features} = props;
    return (
        <div className="card">
           <div className="card-content">
             <h3>{name}</h3>
             <p>Brand: {brand}</p>
             <p>Price: {price}</p>
             <p>Features: {features}</p>
           </div>
        </div>
    )
}

export function MobileCard(props) {
    const {name, price, brand, features} = props;
    return (
        <div className="card">
           <div className="card-content">
             <h3>{name}</h3>
             <p>Brand: {brand}</p>
             <p>Price: {price}</p>
             <p>Features: {features}</p>
           </div>
        </div>
    )
}