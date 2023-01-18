import ProductCard from "./ProductCard";
import { Row } from "react-bootstrap";

const Products = ({ products, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <Row xs={1} md={3} className="g-4 my-2">
            {products.map(product => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </Row>
    );
}
export default Products;