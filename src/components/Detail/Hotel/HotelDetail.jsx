import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import CommentBoard from "../../CommentBoard/CommentBoard";

export default function HotelDetail() {
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
        location: "",
        img: [],
        description: "",
        stars: "",
        priceDay: ""
    });

    useEffect(() => {
        //dispatch al reducer
        setDetail({
            "name": "Hotel 1",
            "location": "El Calafate, Santa Cruz, Argentina",
            "img": [
                "https://logodownload.org/wp-content/uploads/2015/05/river-plate-logo-6.png",
                "https://logodownload.org/wp-content/uploads/2016/10/boca-juniors-logo-escudo-0.png",
                "https://es.logodownload.org/wp-content/uploads/2018/10/independiente-logo-0.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Escudo_de_Racing_Club.svg/1200px-Escudo_de_Racing_Club.svg.png"
            ],
            "description": "Disfruta de una estadía inolvidable con vistas al lago Argentino y los glaciares cercanos.",
            "stars": 4,
            "priceDay": 1500
        },);
    }, []);

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Box>
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
                <Typography variant="h3" sx={{fontWeight: "700"}} gutterBottom> Ubicacion: 
                    <Typography variant="h4">{detail.location}</Typography>
                </Typography>
                <Typography variant="h3" sx={{fontWeight: "700"}} gutterBottom> Estrellas
                    <Typography variant="h4">{detail.stars}</Typography>
                </Typography>
                <Typography variant="h3" sx={{fontWeight: "700"}} gutterBottom> Precio:
                    <Typography variant="h4">{detail.priceDay} por noche</Typography>
                </Typography>
            </Grid>
            <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "3%"}}>
            <Button variant="contained" sx={{fontSize: "1.6rem"}} startIcon={<ArrowBackIosIcon/>} onClick={goBack}>volver</Button>
            </Box>
        </Grid>
        <CommentBoard/>
        </Box>
    )
}