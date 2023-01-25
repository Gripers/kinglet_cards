import {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import Base from './components/Configurator/Base/Base';
import {toast} from 'react-toastify';
import {API} from './api/Api';
import {useLocation} from 'react-router-dom';

const Context = createContext();

const ContextProvider = ({children}) => {
    const pathname = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [cards, setCards] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [name, setName] = useState('kinglet');
    const [component, setComponent] = useState(<Base type='base'/>);
    const [namePosition, setNamePosition] = useState(0);
    const [minDataPosition, setMinDataPosition] = useState(0);
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);
    const [emailUpdate, setEmailUpdate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [insta_ac, setInsta_ac] = useState('');
    const [nameCon, setNameCon] = useState('');
    const [emailCon, setEmailCon] = useState('');
    const [whatsappNum, setWhatsappNum] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        axios
            .get(`${API}Category/`)
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        axios
            .get(`${API}Products/`)
            .then((res) => {
                setCards(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setComponent(<Base/>);
    }, [pathname]);

    const categoryById = async (id) => {
        try {
            const res = axios.get(`${API}Products/?category=${id}`).then((res) => {
                setCards(res.data);
            });
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        axios
            .get(`${API}Comments/`)
            .then((res) => {
                setTestimonials(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const getUpdate = async () => {
        try {
            const res = await axios
                .post(`${API}GetUpdate/`, {
                    first_name: firstName,
                    instagram_accaount: insta_ac,
                    last_name: lastName,
                    your_email: emailUpdate,
                })
                .then((res, e) => {
                    if (res.status === 201) {
                        toast.success('Thanks for subscribing', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        });
                    }
                });
        } catch (error) {
            alert(error);
        }
    };

    const contactUs = async () => {
        try {
            const res = await axios
                .post(`${API}ContactUs/`, {
                    email_address: emailCon,
                    message: feedback,
                    whatsapp_number: whatsappNum,
                    your_name: nameCon,
                })
                .then((res, e) => {
                    if (res.status === 201) {
                        toast.success('Thanks, We will contact with you', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        });
                    }
                });
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Context.Provider
            value={{
                isDrawerOpen,
                setIsDrawerOpen,
                categories,
                setCategories,
                cards,
                setCards,
                categoryById,
                testimonials,
                setTestimonials,
                name,
                setName,
                component,
                setComponent,
                namePosition,
                setNamePosition,
                minDataPosition,
                setMinDataPosition,
                text,
                setText,
                image,
                setImage,
                getUpdate,
                emailUpdate,
                setEmailUpdate,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                insta_ac,
                setInsta_ac,
                contactUs,
                nameCon,
                setNameCon,
                emailCon,
                setEmailCon,
                whatsappNum,
                setWhatsappNum,
                feedback,
                setFeedback,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
