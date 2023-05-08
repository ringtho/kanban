

import crossIcon from "../assets/icon-cross.svg"

const EditTask = () => {
    return (
        <section className="modal">
            <div className="add-task-container"> 
                <form className="add-task-form">
                    <h1>Edit Task</h1>
                    <div className="add-task">
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="e.g. Take coffee break" id="title"
                        value="Add authentication endpoints" />
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
                                <input type="text" placeholder="e.g. Take coffee break"
                                value="Define user mode" />
                                <img src={crossIcon} alt="" className="cross-icon" />
                            </div>
                            <div className="subtask-inputs">
                                <input type="text" placeholder="e.g. Take coffee break"
                                value="Add auth endpoints" />
                                <img src={crossIcon} alt="" className="cross-icon" />
                            </div>
                            <button className="add-subtask-btn">+ Add New Subtask</button>
                        </div>
                    </div>
                    <div className="add-task">
                        <label>Status</label>
                        <select>
                            <option>Todo</option>
                            <option selected>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                    <button type="submit" className="create-task-btn">Create Task</button>
                </form>
            </div>
            
        </section>
    )
}

export default EditTask