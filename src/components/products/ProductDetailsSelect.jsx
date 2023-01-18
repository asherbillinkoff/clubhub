import Form from 'react-bootstrap/Form';

function ProductDetailsSelect({ details }) {

    return (
        <>
            <Form.Group controlId='formGroupHand'>
                <Form.Label>Hand</Form.Label>
                <Form.Select aria-label="Hand">
                    <option>Hand</option>
                    <option value="0">Right</option>
                    <option value="1">Left</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId='formGroupShaft'>
                <Form.Label>Shaft</Form.Label>
                <Form.Select aria-label="Shaft">
                    <option>Shaft</option>
                    <option value="0">{details.shaft_model}</option>
                </Form.Select>
            </Form.Group>
            <Form.Group controlId='formGroupLoft'>
                <Form.Label>Loft</Form.Label>
                <Form.Select aria-label="Loft">
                    <option>Degrees</option>
                    <option value={details.loft}>{details.loft}</option>
                </Form.Select>
            </Form.Group>
        </>
    );
}

export default ProductDetailsSelect;