import { Container } from 'react-bootstrap'

const Home = () => {

    return (
        <Container className="center">
            <div className="card border-secondary text-center">
                <div className="card-header border-secondary">
                    <h5 className="card-title">Miresevini ne banken D'B </h5>
                </div>
                <div className="card-body">
                    <p className="card-text">D'B App eshte ketu per te plotesuar te gjitha nevojat e juaja te bankes tuaj online!</p>
                    <img src='bank.png' className='img-fluid' alt='Bad Bank' />
                </div>
            </div>
        </Container>
    )
}
export default Home