import Banner from "./Banner/Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="max-w-6xl m-auto text-center">
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;