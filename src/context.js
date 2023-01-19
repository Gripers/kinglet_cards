import {createContext, useEffect, useState} from 'react';
import axios from "axios";

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        axios.get("http://kingletcards.com/api/Category/")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axios.get("http://kingletcards.com/api/Products/")
            .then((res) => {
                setCards(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const categoryById = async (id) => {
        try {
            const res = axios
                .get(`http://kingletcards.com/api/Products/?category=${id}`)
                .then((res) => {
                    setCards(res.data);
                })
        } catch (error) {
            alert(error)
        }
    }


    return (
        <Context.Provider value={{ isDrawerOpen, setIsDrawerOpen, categories, setCategories, cards, setCards, categoryById }}>
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };