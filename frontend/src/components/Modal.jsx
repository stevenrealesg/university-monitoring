function Modal({ title, children, buttonContent, buttonType, onClick }) {
    return (
        <>
            <button
                type="button"
                className={`btn btn-${buttonType} mt-3`}
                data-bs-toggle="modal"
                data-bs-target="#modal"
                onClick={onClick}
            >
                {buttonContent}
            </button>

            <div className="modal fade" id="modal" aria-labelledby="modalTitle" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content" style={{ overflow: "hidden" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitle">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ background: "#f5f5f5" }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;