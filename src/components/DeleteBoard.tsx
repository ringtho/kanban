
const DeleteBoard = () => {
    return (
        <section className="add-task-wrapper">
            <div className="add-task-container">
                <div className="delete-modal-wrapper">
                    <h1>Delete this board?</h1>
                    <p>
                        Are you sure you want to delete the ‘Platform Launch’ 
                        board? This action will remove all columns and tasks 
                        and cannot be reversed.
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

export default DeleteBoard