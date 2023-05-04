import { 
    Box,
    Button, 
    ButtonGroup, 
    Card, 
    CardActions, 
    CardContent, 
    Grid, 
    TextField, 
    Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CommentBoard() {
    const [hearts, setHearts] = useState(0);
    const [commentValue, setCommentValue] = useState("");
    const [existingComments, setExistingComments] = useState([]);

    const user = {
        name: "Lucas",
        date: new Date()
    }

    const handleChange = (id) => {
        if (id === hearts) id--; 
        setHearts(id);
    }

    const handleComment = (event) => {
        setCommentValue(event.target.value);
    }

    const handleSend = () => {
        if (commentValue && hearts) {
            const nuevoComentario = {
                userName: user.name,
                date: user.date,
                comment: commentValue,
                rating: hearts
            }
            setExistingComments([
                ...existingComments,
                nuevoComentario
            ]);
            setHearts(0);
            setCommentValue("");
        } else alert("falta el comentario o la calificacion");
    }

    const renderHearts = (heartNumber) => {
        const heartinfo = Array(heartNumber).fill(true).concat(Array(5).fill(false)).slice(0,5);
        return (
            <ButtonGroup sx={{marginRight: "3%"}}>
                {heartinfo.map((elem) => {
                    if (elem) return <Button size="small" disableRipple variant="text"><FavoriteIcon/></Button>
                    else return <Button size="small" disableRipple variant="text"><FavoriteBorderIcon/></Button>
                })}
            </ButtonGroup>
        )
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "1%"}}>
            <Card>
                <Card sx={{border: "1px solid black", width: "70vw", marginLeft: "1%"}}>
                    <Box sx={{display: "flex",justifyContent: "space-between", margin: "1.5% 1% 0% 1%"}}>
                        <Typography variant="h4" display="inline" sx={{marginRight: "1%", marginLeft:"1%"}}>{user.name}</Typography>
                        <Typography variant="h5" display="inline">{user.date.toDateString()}</Typography>
                        <ButtonGroup sx={{marginRight: "3%"}}>
                            <Button size="large" variant="text" disableRipple onClick={() => handleChange(1)}>{hearts > 0?(<FavoriteIcon/>) : (<FavoriteBorderIcon/>)}</Button>
                            <Button size="large" variant="text" disableRipple onClick={() => handleChange(2)}>{hearts > 1?(<FavoriteIcon/>) : (<FavoriteBorderIcon/>)}</Button>
                            <Button size="large" variant="text" disableRipple onClick={() => handleChange(3)}>{hearts > 2?(<FavoriteIcon/>) : (<FavoriteBorderIcon/>)}</Button>
                            <Button size="large" variant="text" disableRipple onClick={() => handleChange(4)}>{hearts > 3?(<FavoriteIcon/>) : (<FavoriteBorderIcon/>)}</Button>
                            <Button size="large" variant="text" disableRipple onClick={() => handleChange(5)}>{hearts > 4?(<FavoriteIcon/>) : (<FavoriteBorderIcon/>)}</Button>
                        </ButtonGroup>
                    </Box>
                    <CardContent sx={{maxWidth: "60vw"}}>
                        <TextField
                            multiline
                            rows={6}
                            fullWidth
                            onChange={handleComment}
                            value={commentValue}
                            placeholder="deja tu comentario..."
                        />
                    </CardContent>
                    <CardActions>
                        <Button size="medium" variant="contained" onClick={handleSend}>Postear</Button>
                        <Button size="medium" variant="contained" onClick={() => setCommentValue("")}>Cancelar</Button>
                    </CardActions>
                </Card>
                <CardContent>
                    {existingComments.length
                    ? (
                    <Box sx={{fontFamily: "sans-serif"}}>
                        <Typography variant="h2" gutterBottom>Comentarios:</Typography>
                            <Grid sx={{display: "flex", flexDirection: "column", textAlign:"left", marginTop: "1%"}}>
                                {existingComments.map((elem, index) => (
                                    <Card sx={{border: "1px solid black", width: "70vw", marginTop:"2%"}} key={index}>
                                        <Box sx={{display: "flex",justifyContent: "space-between", margin: "1% 1% 1% 1%"}}>
                                            <Typography variant="h4" textAlign="left" display="inline">{elem.userName}</Typography>
                                            <Typography variant="h6" sx={{color: "grey"}} display="inline">{elem.date.toDateString()} {elem.date.toLocaleTimeString()}</Typography>
                                            {renderHearts(elem.rating)}
                                        </Box>
                                    <CardContent sx={{border: "1px solid grey", width: "80%", marginLeft:"3%"}}>
                                        <Typography textAlign="left" variant="h5">
                                            {elem.comment}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{marginTop: "2%"}}>
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