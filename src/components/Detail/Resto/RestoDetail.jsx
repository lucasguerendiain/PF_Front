import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import CommentBoard from "../../CommentBoard/CommentBoard";

export default function RestoDetail() {
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
            name: "Restaurant 4",
            location: "Bariloche, Argentina",
            img: [
                "https://indiehoy.com/wp-content/uploads/2018/08/gustavo-cerati-1280x720.jpg",
                "https://www.fundacionkonex.org/custom/web/data/imagenes/repositorio/2010/6/1/1315/201603161112507f53f8c6c730af6aeb52e66eb74d8507.jpg",
                "https://distintaslatitudes.net/storage/2017/09/GUSTAVO-CERATI.jpg",
            ],
            price: "2800",
            description: "Menu vegano y vegetariano, la mejor acelga de todo bariloche se maneja en este resto"
        });
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
            <Typography variant="h1" component="subtitle1" gutterBottom> 
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
                <Typography variant="h3" sx={{fontWeight: "700"}} gutterBottom>¿Precio aproximado por plato...?:
                    <Typography variant="h4">{detail.price} USD</Typography>
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