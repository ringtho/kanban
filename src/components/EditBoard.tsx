import React from 'react'
import crossIcon from '../assets/icon-cross.svg'

const EditBoard = (): any => {
  return (
        <section className="modal">
            <div className="add-task-container">
                <form className="add-task-form">
                    <h1>Edit Board</h1>
                    <div className="add-task">
                        <label htmlFor="title">Board Name</label>
                        <input type="text" placeholder="e.g. Web Design" id="title" value="Platform Launch" />
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
                            <div className="subtask-inputs">
                                <input type="text" placeholder="" value="Done" />
                                <img src={crossIcon} alt="" className="cross-icon" />
                            </div>
                            <button className="add-subtask-btn">+ Add New Column</button>
                        </div>
                    </div>
                    <button type="submit" className="create-task-btn">Save Changes</button>
                </form>
            </div>
        </section>
  )
}

export default EditBoard
