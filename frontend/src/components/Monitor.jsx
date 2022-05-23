function Monitor({ names, last_names, academy_program, dni, photo, phone, semester, email }) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
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
                </div>
            </div>
        </div>
    );
}

export default Monitor;