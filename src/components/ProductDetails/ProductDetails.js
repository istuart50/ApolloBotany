import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './ProductDetails.css';

const ProductDetails = ({ detailedResult }) => {
    return (
        <div>
            <Card>
                <CardBody className='product-details-card-body'>
                    <div className='product-details-left-pane'>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        />
                        <p>{detailedResult.other_name}</p>
                        <p>{detailedResult.scientific_name}</p>
                        <p>{detailedResult.sunlight.join(', ')}</p>
                    </div>
                    <div className='product-details-right-pane'>
                        <CardTitle tag="h5">
                            Plant 1
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {detailedResult.dimension}
                        </CardSubtitle>
                        <CardText>
                            This plant needs water and love. You should probably sing to it too.
                        </CardText>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductDetails;