import React, { useState, useRef } from 'react'

import { v4 } from 'uuid';

import { StyledTodo } from './StyledTodo'

type TypeTodoItem = {
    title: string,
    down: boolean,
    id: number
}

export default function Todo() {

    const [todoArr, setTodoArr] = useState<TypeTodoItem[] | []>([]);

    const [todoInput, setTodoInput] = useState<string>('');

    const todoInputRef = useRef<HTMLInputElement>(null);

    const inputTodoItem = (todo: string) => {
        setTodoInput(todo);
    }
    const addTodoItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        setTodoArr((pre: any) => {
            return [{ title: todoInput, down: false, id: v4() }, ...pre];
        });
        (e.target as HTMLInputElement).value = '';
        setTodoInput('');
    };
    const clickAddTodoItem = () => {
        setTodoArr((pre: any) => {
            return [{ title: todoInput, down: false, id: v4() }, ...pre];
        });
        (todoInputRef.current as HTMLInputElement).value = '';
        setTodoInput('');
    };
    const cleanAllTodo = () => {
        if (todoArr.length === 0) return;
        setTodoArr([]);
    }
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
                        <input type="text" placeholder='新增待辦事項' ref={todoInputRef} onChange={(e) => inputTodoItem(e.target.value)} onKeyDown={(e) => addTodoItem(e)} />
                        <div className="addIcon" onClick={clickAddTodoItem}>
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
                            <div className="haveDoneNum">{todoArr.length} 個待完成項目</div>
                            <div className="clearDone" onClick={cleanAllTodo}>清除已完成項目</div>
                        </div>
                    </div>
                </div>

            </div>
        </StyledTodo>
    )
}
