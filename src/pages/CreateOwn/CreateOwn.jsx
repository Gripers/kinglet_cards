import { useParams } from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../context";
import chip from "../../assets/icons/chip.png";
import "./CreateOwn.scss"
import Navbar from "../../components/Navbar/Navbar";

const CreateOwn = () => {

    const { cards } = useContext(Context)

    const [detail, setDetail] = useState()
    const params = useParams();

    const currentCart = cards.find((el) => {
        return (el.title == params.title)
    });

    // async function ll() {
    //     let g = await axios
    //         .get(`https://api.flakon.kannas.uz/bottles/${params.id}`)
    //     setDetail(g.data)
    // }

    useEffect(() => {
        // ll()
    }, [])

    return (
        <>
            <Navbar />
            <div className="current-cart">
                <div className="cart" style={{ backgroundImage: `url(${currentCart.image})` }}>
                    <img className="chip" src={chip} alt=""/>
                </div>
            </div>
        </>
    );
};

export default CreateOwn;