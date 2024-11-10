import ProductList from "../components/ProductList";
import ImageSlider from '../components/ImageSlider';
import CartWhyUs from '../components/CartWhyUs';
import ContactUs from "../components/ContactUs";

export default function Home({loginStatus}) {

    return (
        <div>
            <ImageSlider />
            <CartWhyUs />
            <ProductList loginStatus={loginStatus}/>
            <ContactUs />
        </div>
    );
}
