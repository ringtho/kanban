import crossIcon from "../assets/icon-cross.svg"

const AddNewBoard = () => {
    return (
        <section className="add-task-wrapper">
            <div className="add-task-container"> 
                <form className="add-task-form">
                    <h1>Add New Board</h1>
                    <div className="add-task">
                        <label htmlFor="title">Board Name</label>
                        <input type="text" placeholder="e.g. Web Design" id="title" />
                    </div>
                    <div className="add-task">
                        <label>Board Columns</label>
                        <div className="add-subtask">
                            <div className="subtask-inputs">
                                <input type="text" placeholder="" value="Todo" />
                                <img src={crossIcon} alt="" className="cross-icon" />
                            </div>
                            <div className="subtask-inputs">
                                <input type="text" placeholder="" value="Doing" />
                                <img src={crossIcon} alt="" className="cross-icon" />
                            </div>
                            <button className="add-subtask-btn">+ Add New Column</button>
                        </div>
                    </div>
                    <button type="submit" className="create-task-btn">Create New Board</button>
                </form>
            </div>
            
        </section>
    )
}

export default AddNewBoard