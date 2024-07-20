import BannerContents from "./BannerContents/BannerContents";
import BannerImage from "./BannerImage/BannerImage";


const Banner = () => {
    return (
        <div className="flex justify-between mt-5 mb-5">
            <BannerContents></BannerContents>
            <BannerImage></BannerImage>
        </div>
    );
};

export default Banner;