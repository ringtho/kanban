import crossIcon from "../assets/icon-cross.svg"

const AddNewTask = () => {
    return (
        <section className="modal">
            <div className="add-task-container"> 
                <form className="add-task-form">
                    <h1>Add New Task</h1>
                    <div className="add-task">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="e.g. Take coffee break" id="title" />
                    </div>
                    <div className="add-task">
                        <label htmlFor="description">Description</label>
                        <textarea 
                        placeholder="e.g. It’s always good to take a break. 
                        This 15 minute break will  recharge the batteries a little."
                        id="description" />
                    </div>
                    <div className="add-task">
                        <label>Subtasks</label>
                        <div className="add-subtask">
                            <div className="subtask-inputs">
                                <input type="text" placeholder="e.g. Take coffee break" />
                                <img src={crossIcon} alt="" className="cross-icon" />
                            </div>
                            <div className="subtask-inputs">
                                <input type="text" placeholder="e.g. Take coffee break" />
                                <img src={crossIcon} alt="" className="cross-icon" />
                            </div>
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