import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/Header/ProductCard';




function Home() {
    return (
        <>
            <h1 className='session_title' id='ticket' > Chamber V7 </h1>
            {/* used xs and md to add responsive sizing of the table */}
            <div className='products'>
                <Row xs={1} md={3} className="g-4">
                    {productsArray.map((product, idx) => (
                        <Col align="center" key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}
export default Home;