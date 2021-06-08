import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-40 bg-gradient-to-t from-gray-100 to-transparent bottom-0 pointer-events-none z-10" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-NmViMjNmNzgt-w1500._CB670724971_.jpg" alt="Alexa" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/03/em/pd21/xcm_em_Prime_Day_2021_856-DEEN_D_PDS-HP-Tall-Hero_1500x600._CB667227494_.jpg" alt="Amazon Music" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-ZDU4MDk4Nzkt-w1500._CB670724943_.jpg" alt="Kindle" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2021/FASHION/CML/01_MARCH/MERCH/GW/ENG/GW_DESKTOP_HERO_1500X600_MEN._CB655756003_.jpg" alt="Men's Fashion" />
                </div>
                <div>
                    <img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/03/SnS/GW/XCM_Manual_1331540_1705520_DE_de_gw_pc_tallhero_2x_de_de_3865916_1500x600_1X_de_DE._CB668308084_.jpg" alt="Auto Delivery" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
