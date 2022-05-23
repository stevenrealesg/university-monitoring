import { useState } from "react";
import userDefault from "../../images/user-default.png";
import serviceMonitor from "../../services/monitor";

function FormMonitor() {

    const [photo, setPhoto] = useState(null);
    const [names, setNames] = useState("");
    const [last_names, setLastNames] = useState("");
    const [dni, setDni] = useState("");
    const [academy_program, setAcademyProgram] = useState("");
    const [semester, setSemester] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await serviceMonitor.save({
            names,
            last_names,
            dni,
            photo,
            academy_program,
            semester,
            email,
            phone
        })
        console.log(created)

    }

    const handlechangeNames = (event) => { setNames(event.target.value) }
    const handlechangeLastNames = (event) => { setLastNames(event.target.value) }
    const handlechangeDni = (event) => { setDni(event.target.value) }
    const handlechangeAcademyProgram = (event) => { setAcademyProgram(event.target.value) }
    const handlechangeSemester = (event) => { setSemester(event.target.value) }
    const handlechangeEmail = (event) => { setEmail(event.target.value) }
    const handlechangePhone = (event) => { setPhone(event.target.value) }

    const handleChangePhoto = (event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-6">
                <div className="mb-3">
                    <label className="form-label">Documento de identificación:</label>
                    <input type="text" className="form-control" value={dni} onChange={handlechangeDni} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombres:</label>
                    <input type="text" className="form-control" value={names} onChange={handlechangeNames} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos:</label>
                    <input type="text" className="form-control" value={last_names} onChange={handlechangeLastNames} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Programa académico:</label>
                    <input type="text" className="form-control" value={academy_program} onChange={handlechangeAcademyProgram} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Semestre:</label>
                    <input type="number" className="form-control" value={semester} onChange={handlechangeSemester} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo:</label>
                    <input type="email" className="form-control" value={email} onChange={handlechangeEmail} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" value={phone} onChange={handlechangePhone} />
                </div>
            </div>
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Seleccionar foto.</label>
                    <input className="form-control" type="file" id="formFile" accept="image/*" onChange={handleChangePhoto} />
                </div>
                <div className="text-center">
                    <p>Vista previa:</p>
                    <img src={photo || userDefault} width={250} className="img-thumbnail" alt="preview" />
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-secondary me-2">Cancelar</button>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </div>
        </form>
    );
}

export default FormMonitor;