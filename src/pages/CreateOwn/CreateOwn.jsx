import { useParams } from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../context";
import chip from "../../assets/icons/chip.png";
import "./CreateOwn.scss"
import Navbar from "../../components/Navbar/Navbar";
import {API} from "../../api/Api";
import axios from "axios";

const CreateOwn = () => {

    const { cards } = useContext(Context)

    const params = useParams();

    const currentCart = cards.find((el) => {
        return (el.title == params.title)
    });
    const [detail, setDetail] = useState()

    // async function ll() {
    //     let g = await axios
    //         .get(`${API}/Products/${params.title}`)
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