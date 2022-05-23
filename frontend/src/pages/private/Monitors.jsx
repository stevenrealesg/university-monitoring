import { useEffect, useState } from "react";
import Monitor from "../../components/Monitor";
import serviceMonitor from "../../services/monitor"
import Modal from "../../components/Modal";
import FormMonitor from "./FormMonitor";

function Monitors() {

    const [monitors, setMonitors] = useState();

    useEffect(() => {
        serviceMonitor.getAll().then(monitors => {
            setMonitors(monitors)
        })
    }, [])

    return (
        <>
            <h3 className="mb-3 border-bottom pb-3">Listado de monitores</h3>
            <div className="d-flex justify-content-end mb-3">
                <Modal title="Agregar monitor" buttonContent={"Agregar"} buttonType={"primary"}>
                    <FormMonitor />
                </Modal>
            </div>
            {monitors && monitors.map(monitor => <Monitor key={monitor.id} {...monitor} />)}
        </>
    );
}

export default Monitors;