import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import apiCall from '../../utils/movieApi';
import { CardColumns, Card, Button, Form, Container, ModalTitle } from 'react-bootstrap';

const MovieContainer = () => {

    const [movieData, setMovieData] = useState([]);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const response = apiCall();

        const callReturn = await response.then(data => data);

        const { title } = callReturn;
        
        setMovieData([{ title: title, }])
        console.log(movieData)
    }

    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Button type='submit' variant='success' size='sm'>Generate Random Movie</Button>
            </Form>
            <CardColumns>
            {movieData.map((results) => {
                    return(
                        <Card border='dark'>
                            <Card.Body>
                                <h3>{results.title}</h3>
                            </Card.Body>
                        </Card>
                    )
                })   
                }
            </CardColumns>
        </Container>
    )
}

export default MovieContainer;