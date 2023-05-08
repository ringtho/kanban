

const DeleteTask = () => {
    return (
        <section className="modal">
            <div className="add-task-container">
                <div className="delete-modal-wrapper">
                    <h1>Delete this task?</h1>
                    <p>
                        Are you sure you want to delete the ‘Build settings UI’ task 
                        and its subtasks? This action cannot be reversed.
                    </p>
                    <div className="delete-modal-btns">
                        <button className="delete-btn">Delete</button>
                        <button className="cancel-btn">Cancel</button>
                    </div>
                    </div> 
                
            </div>
            
        </section>
    )
}

export default DeleteTask