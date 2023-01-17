import React, {useContext} from 'react';
import {Context} from "../../../context";
import "./DesignLists.scss"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import useWindowSize from "../../../hooks/useWindowSize";
import chip from "../../../assets/icons/chip.png"

const DesignLists = () => {

    const {width} = useWindowSize();
    const {categories, cards } = useContext(Context)

    return (
        <div className="container">
            <div className="categories_div">
                <Swiper
                    slidesPerView={
                        width > 1280 ? 6 : width > 900 ? 3 : width > 500 ? 2 : 1.5
                    }
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={false}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {categories.map((el) => (
                        <SwiperSlide>
                            <h3>{el.name}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="carts_div">
                <div className="carts_inner">
                    {cards.map((el) => (
                        <div className="cart" style={{ backgroundImage: `url(${el.img})` }}>
                            <img className="chip" src={chip} alt=""/>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DesignLists;