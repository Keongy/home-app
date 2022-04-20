import Modal from "../../components/modal/Modal";
import routes from '../../config/routes'

const Home: React.FC = () => {

    return (
        <div className="home container text-center">
            <h1>My Home App</h1>
            <ul className="d-flex justify-content-center mt-5">
                {routes.map((modal, index) => {
                    return modal.display ? (
                        <li className="m-3" key={index}>
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