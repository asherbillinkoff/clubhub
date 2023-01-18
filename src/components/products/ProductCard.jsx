import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

function ProductCard(props) {

    const navigate = useNavigate();

    function sendToProductDetails(event) {
        console.log(event);
        let id = event.target.id;
        navigate(`/productdetails/${id}`);
    }

    return (
        <Card className="mx-4" style={{ maxWidth: '15rem' }}>
            <Card.Img variant="top" src={`${props.product.image}`} />
            <Card.Body>
                <Card.Title><h4>{props.product.model}</h4></Card.Title>
                <Card.Text>
                    <div>
                        <p><strong>{props.product.brand}</strong></p>
                    </div>
                    <div>
                        <span>${props.product.price}</span>
                    </div>
                </Card.Text>
                <Button onClick={sendToProductDetails} variant="primary" id={props.product.id}>View</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;