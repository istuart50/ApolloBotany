import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div>
            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Plant 1
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        some plant name.
                    </CardSubtitle>
                    <CardText>
                        This plant needs water and love. You should probably sing to it too.
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard;