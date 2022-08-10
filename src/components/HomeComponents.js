import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        )
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    else
        return (
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.desigination ? <CardSubtitle>{item.desigination}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform >
        );
}

function Home(props) {
console.log('Home: '. props)
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.staff}
                        isLoading={props.staffsLoading}
                        errMess={props.staffsErrMess} />
                    <RenderCard item={props.depart}
                        isLoading={props.departsLoading}
                        errMess={props.departsErrMess} />
                    <RenderCard item={props.salary}
                        isLoading={props.salarysLoading}
                        errMess={props.salarysErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;