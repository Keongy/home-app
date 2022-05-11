import Modal from "../../components/modal/Modal";
import routes from '../../config/routes'

const Home: React.FC = () => {

    return (
        <div className="home container text-center">
            <h1>My Home App</h1>
            <div className="d-flex justify-content-center">
                <ul className="row list-unstyled mt-5 pt-5">
                    {routes.map((modal, index) => {
                        return modal.display ? (
                            <li className="col-6 d-flex justify-content-center mb-5" key={index}>
                                <Modal
                                    modal={modal.name}
                                    path={modal.path}
                                    background={modal.background}
                                />
                            </li>
                        )
                            :
                            (
                                null
                            )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Home;