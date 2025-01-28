import { createRoot } from "react-dom/client";
import CardContainer from './cards';
import MobileCard from './cards';
import './cards.css';

const root = createRoot(document.getElementById("root"));

root.render(
    <div className="card-container">
        <CardContainer
            name="Galaxy S24 Ultra Pro Max"
            brand="Samsung"
            price="₹79,999"
            features="5G, 128GB, AMOLED Display"
        />

        <MobileCard
            name="iPhone 14 Pro Max"
            brand="Apple"
            price="₹1,00,00"
            features="5G, 256GB, Super Retina Display"
        />
    </div>
);