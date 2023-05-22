import React, { useState } from 'react'

const Todo: React.FunctionComponent = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <section>
        <div className="todo-header">
            <div className="todo-circle"></div>
            <p className="todo-title">Todo (4)</p>
        </div>
        <div className="todo-body-wrapper">
            <div
                className={'todo-body'}
                onClick={() => { setIsClicked(!isClicked) }}>
                <h3>Build UI for onboarding flow</h3>
                <p>0 of 3 subtasks</p>
            </div>
            <div className="todo-body">
                <h3>Build UI for onboarding flow</h3>
                <p>0 of 3 subtasks</p>
            </div>
            <div className="todo-body">
                <h3>Build UI for onboarding flow</h3>
                <p>0 of 3 subtasks</p>
            </div>
        </div>
    </section>
  )
}

export default Todo
