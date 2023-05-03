import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";

export default function ActivityDetail() {
    const navigate = useNavigate();
    const setings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        adaptativeHeigth: false,
    }
    //dispatch = useDispatch;
    //const detail = useSelector((state) => state.activities.detail);

    const [detail, setDetail] = useState({
        name: "",
        duration: "",
        img: [],
        description: "",
        typeAct: "",
        price: ""
    });

    useEffect(() => {
        //dispatch al reducer
        setDetail({
            "name": "Actividad 1",
            "duration": 5,
            "img": [
                "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg",
                "https://cdn0.ecologiaverde.com/es/posts/7/7/4/animales_que_viven_en_el_campo_3477_orig.jpg",
                "https://cdn0.ecologiaverde.com/es/posts/6/7/4/animales_de_la_ciudad_3476_orig.jpg",
                "https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
                    ],
            "description": "Únete a nosotros en una caminata espectacular al Glaciar Viedma, uno de los glaciares más grandes de la Patagonia. ",
            "typeAct": "treking",
            "price": 250
        });
    }, []);

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Grid sx={{
            maxWidth: "70vw",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: "2%",
            marginLeft: "8%",
        }}>
            <Typography variant="h1" gutterBottom> 
                {detail.name}
            </Typography>
                <Slider {...setings}>
                    {detail.img
                        ? (detail.img.map((item, index) => (
                                <Box key={index} sx={{
                                    maxWidth: "70%",
                                }}>
                                    <img src={item} alt=""></img>
                                </Box>
                            )
                        ))
                        : ("cargando")
                    }
                </Slider>
            <Grid marginTop="4%">
                <Typography variant="h3" sx={{fontWeight: "600"}} gutterBottom> Descripcion:
                    <Typography variant="h4" sx={{display: "block"}}>{detail.description}</Typography>
                </Typography>
                <Typography variant="h3" sx={{fontWeight: "700"}} gutterBottom> Duracion: 
                    <Typography variant="h4">{detail.duration} horas</Typography>
                </Typography>
                <Typography variant="h3" sx={{fontWeight: "700"}} gutterBottom> Tipo de actividad:
                    <Typography variant="h4">{detail.typeAct}</Typography>
                </Typography>
                <Typography variant="h3" sx={{fontWeight: "700"}} gutterBottom> Precio:
                    <Typography variant="h4">{detail.price} USD</Typography>
                </Typography>
            </Grid>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "3%"}}>
            <Button variant="contained" sx={{fontSize: "1.4rem", marginRight: "3%"}} startIcon={<AddShoppingCartIcon/>}>Añadir al Carrito</Button>
            <Button variant="contained" sx={{fontSize: "1.4rem"}} startIcon={<ArrowBackIosIcon/>} onClick={goBack}>volver</Button>
            </Box>
        </Grid>
    )
}