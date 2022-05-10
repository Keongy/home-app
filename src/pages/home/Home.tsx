import Modal from "../../components/modal/Modal";
import routes from '../../config/routes'

const Home: React.FC = () => {

    return (
        <div className="home container-fluid text-center">
            <h1>My Home App</h1>
            <ul className="row d-flex justify-content-center list-unstyled mt-5">
                {routes.map((modal, index) => {
                    return modal.display ? (
                        <li className="col-12 col-md-4 col-lg-6 col-xl-2 d-flex justify-content-center mb-3" key={index}>
                            <Modal
                                modal={modal.name}
                                path={modal.path}
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
    );
};

export default Home;