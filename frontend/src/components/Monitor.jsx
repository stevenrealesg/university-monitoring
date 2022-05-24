import imgDefault from '../images/user-default.png'
import Modal from './Modal';
import FormMonitor from '../pages/private/FormMonitor';

function Monitor({ names, last_names, academy_program, dni, photo, phone, semester, email, handleDelete, setGetAgain, handleUpdate, userToUpdate }) {

    const URL_API = process.env.REACT_APP_URL_API || 'http://localhost:3000'
    const urlPhoto = photo ? `${URL_API}/static/images/${photo}` : imgDefault

    return (
        <div className='col-12 col-md-6'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="h-100 d-flex align-items-center justify-content-center p-2">
                            <img src={urlPhoto} width={150} className="img-fluid" alt="Foto" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{`${names} ${last_names}`}</h5>
                            <p className="card-text mb-0">{dni}</p>
                            <p className="card-text mb-0">{academy_program}</p>
                            <p className="card-text mb-0">Semestre: {semester}</p>
                            <p className="card-text mb-0"><small className="text-muted">{email}</small></p>
                            <p className="card-text mb-0"><small className="text-muted"><i className="bi bi-telephone-fill me-1"></i>{phone}</small></p>
                        </div>
                        <div className='d-flex justify-content-end p-2'>
                            {/* <button className="btn btn-link" onClick={handleUpdate}><i className="bi bi-pencil-fill"></i> Editar</button> */}
                            <Modal
                                title="Editar monitor"
                                buttonContent={"Editar"}
                                buttonType={"link"}
                                prevIconTag={"pencil-fill"}
                                id={"modalUpdateMonitor"}
                                onClick={handleUpdate}
                            >
                                <FormMonitor setGetAgain={setGetAgain} userToUpdate={userToUpdate}/>
                            </Modal>
                            <button className="btn btn-link text-danger" onClick={handleDelete}><i className="bi bi-trash3-fill"></i> Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monitor;