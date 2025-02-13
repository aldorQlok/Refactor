import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import MyCv from '../assets/myData.json'

export default function Cv() {
    return (
        <CardGroup>
            {MyCv.arbetsplats.map((arbetsplats) => {
                return (
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{arbetsplats.name}</Card.Title>
                            <Card.Text>
                                {arbetsplats.Arbetsuppgifter}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </CardGroup>
    )
}