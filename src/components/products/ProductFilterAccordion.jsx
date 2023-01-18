import Accordion from 'react-bootstrap/Accordion';
// import { Container } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';

function ProductFilterAccordion({ updateRest, maxPrice, updatePrice }) {

    function handlePriceChange(e) {
        updatePrice(e.target.value)
    }

    function handleFilterChange(category, newValue) {
        updateRest(category, newValue);
    }


    return (
        <Accordion className="ms-3 mt-5" style={{ maxWidth: '15vw' }} defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <div className="slidecontainer">
                        <input onChange={handlePriceChange} type="range" defaultValue={1000} min="0" max="1000" step="50" className="slider" id="myRange"></input>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span id="min-price">$0</span>
                        <span id="current-price" style={{ color: "blue" }}>${maxPrice}</span>
                        <span id="max-price">$1000</span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Clubs</Accordion.Header>
                <Accordion.Body>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('c', 'd')} className="form-check-input" type="checkbox" value="drivers" id="driverCheckbox"></input>
                        <label className="form-check-label" htmlFor="driverCheckbox">
                            Drivers
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('c', 'w')} className="form-check-input" type="checkbox" value="irons" id="ironsCheckbox"></input>
                        <label className="form-check-label" htmlFor="ironsCheckbox">
                            Fairway Woods
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('c', 'i')} className="form-check-input" type="checkbox" value="irons" id="ironsCheckbox"></input>
                        <label className="form-check-label" htmlFor="ironsCheckbox">
                            Irons
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('c', 'we')} className="form-check-input" type="checkbox" value="wedges" id="wedgesCheckbox"></input>
                        <label className="form-check-label" htmlFor="wedgesCheckbox">
                            Wedges
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('c', 'p')} className="form-check-input" type="checkbox" value="Putters" id="puttersCheckbox"></input>
                        <label className="form-check-label" htmlFor="puttersCheckbox">
                            Putters
                        </label>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Brands</Accordion.Header>
                <Accordion.Body>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('b', 'taylormade')} className="form-check-input" type="checkbox" value="drivers" id="taylormadeCheckbox"></input>
                        <label className="form-check-label" htmlFor="taylormadeCheckbox">
                            TaylorMade
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('b', 'titleist')} className="form-check-input" type="checkbox" value="irons" id="titleistCheckbox"></input>
                        <label className="form-check-label" htmlFor="titleistCheckbox">
                            Titleist
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('b', 'ping')} className="form-check-input" type="checkbox" value="wedges" id="pingCheckbox"></input>
                        <label className="form-check-label" htmlFor="pingCheckbox">
                            Ping
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('b', 'callaway')} className="form-check-input" type="checkbox" value="Putters" id="callawayCheckbox"></input>
                        <label className="form-check-label" htmlFor="callawayCheckbox">
                            Callaway
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('b', 'mizuno')} className="form-check-input" type="checkbox" value="Putters" id="callawayCheckbox"></input>
                        <label className="form-check-label" htmlFor="callawayCheckbox">
                            Mizuno
                        </label>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Hand</Accordion.Header>
                <Accordion.Body>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('h', 0)} className="form-check-input" type="checkbox" value="drivers" id="rightCheckbox"></input>
                        <label className="form-check-label" htmlFor="rightCheckbox">
                            Right
                        </label>
                    </div>
                    <div className="form-check">
                        <input onClick={() => handleFilterChange('h', 1)} className="form-check-input" type="checkbox" value="irons" id="leftCheckbox"></input>
                        <label className="form-check-label" htmlFor="leftCheckbox">
                            Left
                        </label>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default ProductFilterAccordion;