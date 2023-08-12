const AddTask = (props) => {
    const doAddTask=()=>{
        const name = document.getElementById("task_desc").value;
        console.log(name);
        props.addTask(name);
    }
    return(
        <div className="container-fluid mt-4">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h2 className="text-center">Add Task</h2>
                </div>

                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="task_desc" className="h3 form-label">Add your Task  </label>
                        <input type="text" name="task_desc" placeholder="Mention your Task here" className="form-control" id="task_desc" />
                    </div>
                </div>

                <div className="card-footer text-center bg-white">
                    <button className='btn btn-outline-success col-4' onClick={doAddTask}><h3>Add Task</h3></button>
                </div>
            </div>
        </div>
    );
}

export default AddTask;