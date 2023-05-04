

const AddNewTask = () => {
    return (
        <section className="add-task-wrapper">
            <div className="add-task-container"> 
                <form className="add-task-form">
                    <h1>Add New Task</h1>
                    <div className="add-task">
                        <label>Title</label>
                        <input type="text" placeholder="e.g. Take coffee break" />
                    </div>
                    <div className="add-task">
                        <label>Description</label>
                        <textarea 
                        placeholder="e.g. It’s always good to take a break. 
                        This 15 minute break will  recharge the batteries a little." />
                    </div>
                    <div className="add-task">
                        <label>Subtasks</label>
                        <div className="add-subtask">
                            <input type="text" placeholder="e.g. Take coffee break" />
                            <input type="text" placeholder="e.g. Take coffee break" />
                            <button className="add-subtask-btn">+ Add New Subtask</button>
                        </div>
                    </div>
                    <div className="add-task">
                        <label>Status</label>
                        <select>
                            <option>Todo</option>
                            <option>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                    <button type="submit" className="create-task-btn">Create Task</button>
                </form>
            </div>
            
        </section>
    )
}

export default AddNewTask