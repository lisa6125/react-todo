import React, { useState } from 'react'

import { StyledTodo } from './StyledTodo'

export default function Todo() {

    const [todoArr, setTodoArr] = useState([
        { title: 'try someting', down: 'false', id: 1 }
    ]);
    return (
        <StyledTodo>
            <div className='todo'>
                <div className="nav">
                    <div className="nav_logo">
                        <img src="./assets/images/logo.svg" alt="" />
                    </div>
                    <div className="nav_user">
                        王小明的代辦
                    </div>
                    <div className="nav_logout">登出</div>
                </div>
                <div className="todo_container">
                    <div className="todo_input">
                        <input type="text" placeholder='新增待辦事項' />
                        <div className="addIcon">
                            <img src="./assets/images/add.svg" alt="" />
                        </div>
                    </div>
                    <div className="todo_listBox">
                        <div className="todo_listBox_tab">
                            <div className="todo_listBox_tab_item">全部</div>
                            <div className="todo_listBox_tab_item">待完成</div>
                            <div className="todo_listBox_tab_item">已完成</div>
                        </div>
                        <div className="todo_listBox_list">
                            {
                                todoArr.length > 0 ?
                                    todoArr.map((item) => {
                                        return (
                                            <div className='todoItem' key={item.id}>
                                                <div className="checkBox"></div>
                                                <span>{item.title}</span>
                                            </div>
                                            // <></>
                                        )
                                    }) :
                                    <div className="empty">
                                        <img src="./assets/images/empty.png" alt="" />
                                    </div>
                            }
                        </div>
                        <div className="todo_listBox_done">
                            <div className="haveDoneNum">5 個待完成項目</div>
                            <div className="clearDone">清除已完成項目</div>
                        </div>
                    </div>
                </div>

            </div>
        </StyledTodo>
    )
}
