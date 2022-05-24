import { useEffect, useState } from "react";
import Monitor from "../../components/Monitor";
import serviceMonitor from "../../services/monitor"
import Modal from "../../components/Modal";
import FormMonitor from "./FormMonitor";

function Monitors() {

    const [monitors, setMonitors] = useState();
    const [getAgain, setGetAgain] = useState(false)
    const [userToUpdate, setUserToUpdate] = useState(null)

    useEffect(() => {
        serviceMonitor.getAll().then(monitors => {
            setMonitors(monitors)
        })
    }, [getAgain])

    const deleteMonitor = async (id) => {
        await serviceMonitor.remove(id)
        setGetAgain(prev => !prev)
    }

    const updateMonitor = (data) => {
        setUserToUpdate(data)
    }

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de monitores</h3>
            <div className="d-flex justify-content-end mb-3">
                <Modal title="Agregar monitor" buttonContent={"Agregar"} buttonType={"primary"} prevIconTag={"plus-lg"}>
                    <FormMonitor setGetAgain={setGetAgain} />
                </Modal>
            </div>
            <div className="row">
                {monitors && monitors.map(monitor => (
                    <Monitor
                        key={monitor.id}
                        {...monitor}
                        handleDelete={() => deleteMonitor(monitor.id)}
                        setGetAgain={setGetAgain}
                        handleUpdate={() => updateMonitor(monitor)}
                        userToUpdate={userToUpdate}
                    />
                ))}
            </div>
        </>
    );
}

export default Monitors;