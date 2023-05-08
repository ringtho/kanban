

const ViewTask = () => {
    return (
        <section className="modal">
            <div className="add-task-container"> 
                <div className="view-task">
                    <h1>
                    Research pricing points of various 
                    competitors and trial different business models
                    </h1>

                    <p>
                    We know what we're planning to build for version one. 
                    Now we need to finalise the first pricing model we'll use. 
                    Keep iterating the subtasks until we have a coherent proposition.
                    </p>
                    <div className="add-task">
                        <label htmlFor="title">Subtasks (2 of 3)</label>
                        <div className="view-subtasks-container">
                            <div className="view-subtask">
                                <input type="checkbox" id="subtask" checked />
                                <label htmlFor="subtask">
                                    Research competitor pricing and business models
                                </label>
                            </div>
                            <div className="view-subtask">
                                <input type="checkbox" id="subtask" checked />
                                <label htmlFor="subtask">
                                    Outline a business model that works for our solution
                                </label>
                            </div>
                            <div className="view-subtask">
                                <input type="checkbox" id="subtask" />
                                <label htmlFor="subtask">
                                    Surveying and testing
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className="add-task">
                        <label>Current Status</label>
                        <select>
                            <option>Todo</option>
                            <option selected>Doing</option>
                            <option>Done</option>
                        </select>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default ViewTask