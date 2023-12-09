import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import Render from "../3d/render";
// [{... }, {... }, {... }]
function Store() {
  return (
    <>
    <div className=" ">
    <h1 className="font-bold text-black items-center md:text-2xl text-xl mt-10 bg-white">Buy</h1>
      <h1 align="center" className="p-1 "></h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      </div>
    </>
  );
}

export default Store;
