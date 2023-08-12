const PendingTask = (props) => {
    console.log(props);
    return(
        <div className="container-fluid pending-tasks-container p-0">
            <div className="card pending-tasks-card" style={{backgroundColor: '#e6ebed'}}>
                <div className="card-body d-flex justify-content-between align-items-center p-2">
                    <div className="task-details d-flex justify-content-start align-items-center mt-2">
                        <h3>{props.data.task}</h3>
                    </div>
                    <div className="buttons">
                        <button className="btn btn-success" data-toggle="tooltip" data-placement="top" title="Update task status to Completed" type="button" onClick={()=>props.changetaskstatus(props.data._id)}><i class="fa-solid fa-check"></i></ button>&nbsp;
                        <button className="btn btn-danger" type="button" data-toggle="tooltip" data-placement="top" title="Delete Task" onClick={()=>props.delete(props.data._id)}><i className="fa-sharp fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PendingTask;