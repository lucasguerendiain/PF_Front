import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios"
// import { getHotelDetailById } from '../../redux/actions/HotelesActions';
// import { getActivityDetailById } from "../../redux/actions/ActivitiesActions";
// import { getPackageDetailById } from '../../redux/actions/packageActions';
// import { getRestaurantDetailById } from '../../redux/actions/RestaurantsActions';
// import { useDispatch } from "react-redux";


export default function CommentBoard(prop) {
    const [hearts, setHearts] = useState(0);
    const [commentValue, setCommentValue] = useState("");
    const [existingComments, setExistingComments] = useState([]);
    const [errors, setErrors] = useState(false);
  


    const user = {
        name: 'Lucas',
    };
    const date = new Date();


    const handleChange = (id) => {
        if (id === hearts) id--;
        setHearts(id);
    }


    const handleComment = (event) => {
        //ahora mismo el usuario puede poner todos los saltos de linea que quiera
        //no se me ocurre como frenarlo
        setCommentValue(event.target.value);
    };



    useEffect(() => {
        setErrors(commentValue.split("\n").length > 7 ? true : false);
    }, [commentValue])


    const handleSend = () => {
        if (commentValue && hearts && !errors) {
            const nuevoComentario = {
                userName: user.name,
                userId: 1, // cambiar cuando esté el reducer de user
                date: date,
                comment: commentValue,
                rating: hearts.toString()
            }
            if (prop.activityId) {
                nuevoComentario.activityId = prop.activityId
            }
            if (prop.hotelId) {
                nuevoComentario.hotelId = prop.hotelId
            }
            if (prop.restaurantId) {
                nuevoComentario.restaurantId = prop.restaurantId
            }
            if (prop.packageId) {
                nuevoComentario.packageId = prop.packageId
            }

            axios.post("/comments", nuevoComentario)
                .then(response => {
                    if (response.data) {
                        alert("Comentario posteado con exito")
                    }
                })

            // if (comentario.activityId) {
            //     dispatch(getActivityDetailById(comentario.activityId))
            // }
            // if (comentario.hotelId) {
            //     dispatch(getHotelDetailById(comentario.hotelId))
            // }
            // if (comentario.restaurantId) {
            //     dispatch(getRestaurantDetailById(comentario.restaurantId))
            // }
            // if (comentario.packageId) {
            //     dispatch(getPackageDetailById(comentario.packageId))
            // }


            setExistingComments([
                ...existingComments,
                nuevoComentario,
            ]);
            setHearts(0);
            setCommentValue("");
        } else alert("falta el comentario o la calificacion");
    }

    const renderHearts = (heartNumber) => {
        const heartinfo = Array(heartNumber).fill(true).concat(Array(5).fill(false)).slice(0, 5);
        return (
            <ButtonGroup sx={{ marginRight: "3%" }}>
                {heartinfo.map((elem) => {
                    if (elem) return <Button sx={{ color: "red", pointerEvents: "none" }} size="small" disableRipple variant="text"><FavoriteIcon /></Button>
                    else return <Button sx={{ color: "red", pointerEvents: "none" }} size="small" disableRipple variant="text"><FavoriteBorderIcon /></Button>
                })}
            </ButtonGroup>
        )
    }

    return (

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Card sx={{ backgroundColor: "warning.main", width: "70vw", display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid grey" }}>
                <Card sx={{ border: "1px solid black", marginTop: "1%", borderBottom: "1px dashed" }}>
                    <CardHeader
                        title={
                            <Box sx={{ display: "flex", width: "66vw", justifyContent: "space-between", margin: "1.5% 1% 0% 1%" }}>
                                <Typography variant="h4" display="inline" sx={{ marginRight: "1%", marginLeft: "1%" }}>{user.name}</Typography>
                                <Typography variant="h5" display="inline">{date.toDateString()}</Typography>
                                <Typography display="inline" variant="subtitle1">valoracion:
                                    <ButtonGroup sx={{ marginRight: "3%", color: "red" }}>
                                        <Button sx={{ color: "red" }} size="large" variant="text" disableRipple onClick={() => handleChange(1)}>{hearts > 0 ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}</Button>
                                        <Button sx={{ color: "red" }} size="large" variant="text" disableRipple onClick={() => handleChange(2)}>{hearts > 1 ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}</Button>
                                        <Button sx={{ color: "red" }} size="large" variant="text" disableRipple onClick={() => handleChange(3)}>{hearts > 2 ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}</Button>
                                        <Button sx={{ color: "red" }} size="large" variant="text" disableRipple onClick={() => handleChange(4)}>{hearts > 3 ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}</Button>
                                        <Button sx={{ color: "red" }} size="large" variant="text" disableRipple onClick={() => handleChange(5)}>{hearts > 4 ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}</Button>
                                    </ButtonGroup>
                                </Typography>
                            </Box>
                        }

                    />
                    <CardContent sx={{ maxWidth: "60vw" }}>
                        <TextField
                            multiline
                            rows={6}
                            fullWidth
                            onChange={handleComment}
                            value={commentValue}
                            placeholder="deja tu comentario..."
                            error={errors}
                            helperText={errors ? "no mas de 7 saltos de linea" : ""}
                        />

                    </CardContent>
                    <CardActions sx={{ marginTop: '2%' }}>
                        <Button size="medium" variant="contained" onClick={handleSend}>Postear</Button>
                        <Button size="medium" variant="contained" onClick={() => setCommentValue("")}>Cancelar</Button>
                    </CardActions>

                </Card>
                <CardContent sx={{ backgroundColor: "white", width: "66vw", border: "1px solid black", borderTop: "0" }}>
                    {prop.arrayComments
                        ? (
                            <Box sx={{ fontFamily: "sans-serif", padding: 0 }}>
                                <Typography variant="h2" gutterBottom>Comentarios:</Typography>
                                <Grid sx={{ display: "flex", flexDirection: "column", textAlign: "left", marginTop: "1%" }}>
                                    {prop.arrayComments.concat(existingComments).reverse().map((elem, index) => (
                                        <Card sx={{ border: "1px solid black", marginTop: "2%" }} key={index}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", margin: "1% 1% 1% 1%" }}>
                                                <Typography variant="h4" textAlign="left" display="inline">{elem.userName}</Typography>
                                                <Typography variant="h6" sx={{ color: "grey" }} display="inline">{elem.date.toString().slice(0, 10)}</Typography>
                                                <Typography variant="subtitle1" display="inline">valoracion: {renderHearts(Number(elem.rating))}</Typography>
                                            </Box>
                                            <CardContent sx={{ border: "1px dashed grey", width: "80%", marginLeft: "3%" }}>
                                                <Typography textAlign="left" variant="h5" sx={{ whiteSpace: "pre-line" }}>
                                                    {elem.comment}
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ marginTop: "2%" }}>
                                                <Button size="small" variant="contained" disabled>Deletear</Button>
                                            </CardActions>
                                        </Card>
                                    ))}
                                </Grid>
                            </Box>)
                        : ("no hay comentarios, deja el primero!")
                    }
                </CardContent>
            </Card>
        </Box>
    )
}

