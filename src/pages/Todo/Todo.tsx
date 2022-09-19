import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { produce } from 'immer'
//i18n
import { useTranslation } from 'react-i18next'

import { v4 } from 'uuid'

import { StyledTodo } from './StyledTodo'

// redux
import { useDispatch, useSelector } from 'react-redux'
// dispatch type
import { AppDispatch, RootStore } from '../../redux/store'

import { fetchDataTodo, fetchAddTodo, logOutFetchUser } from '../../redux'

interface TypeTodoItem {
    content: string,
    completed_at: boolean,
    id: number
}

type caseStateType = "All" | "unCompleted" | "Completed"

export default function Todo() {

    const { t, i18n } = useTranslation()

    const store = useSelector((store: RootStore) => store)

    const dispatch = useDispatch<AppDispatch>()

    const [todoArr, setTodoArr] = useState<TypeTodoItem[] | []>(store.todoStatus.todo);

    const [filterTodoArr, setFilterTodoArr] = useState<TypeTodoItem[] | []>(todoArr);

    const [todoInput, setTodoInput] = useState<string>('');

    const todoInputRef = useRef<HTMLInputElement>(null);

    const [caseState, setCaseState] = useState<caseStateType>('All');


    const inputTodoItem = (todo: string) => {
        setTodoInput(todo);
    }
    const addTodoItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;
        dispatch(fetchAddTodo(store, todoInput));
        (e.target as HTMLInputElement).value = '';
        setTodoInput('');
    };
    const clickAddTodoItem = () => {
        if (todoInput === '') return;
        dispatch(fetchAddTodo(store, todoInput));
        (todoInputRef.current as HTMLInputElement).value = '';
        setTodoInput('');
    };
    const cleanAllTodo = () => {
        if (todoArr.length === 0) return;
        setTodoArr(todoArr.filter((item) => {
            return !item.completed_at
        }));
    }
    const handleAlreadyDone = (idx: number) => {
        setTodoArr(produce((draftState) => {
            draftState.map((item) => {
                if (idx === item.id) {
                    item.completed_at = !item.completed_at
                }
            })
        }));
    }
    function handleChangeCaseState<Type extends caseStateType>(value: Type) {
        setCaseState(value);
    }
    const handleDeleteItem = (idx: number) => {
        setTodoArr(todoArr.filter((item) => {
            return item.id !== idx
        }));
    }

    const handleUserSignOut = () => {
        dispatch(logOutFetchUser())
    }

    useEffect(() => {
        dispatch(fetchDataTodo())
    }, [])

    useEffect(() => {
        if (caseState === 'unCompleted') {
            setFilterTodoArr(
                store.todoStatus.todo.filter((item) => {
                    return !item.completed_at
                })
            );
        } else if (caseState === 'Completed') {
            setFilterTodoArr(
                store.todoStatus.todo.filter((item) => {
                    return item.completed_at
                })
            );
        } else {
            setFilterTodoArr(store.todoStatus.todo);
        }
    }, [store.todoStatus.todo, caseState])
    return (
        <StyledTodo>
            <div className='todo'>
                <div className="nav">
                    <Link to='/' className="nav_logo">
                        <img src="./assets/images/logo.svg" alt="" />
                    </Link>
                    <div className="nav_user">
                        {store.userStatus.user}的代辦
                    </div>
                    <div className="nav_logout" onClick={handleUserSignOut}>{t('logout')}</div>
                </div>
                <div className="todo_container">
                    <div className="todo_input">
                        <input type="text" placeholder={t('addToDo')} ref={todoInputRef} onChange={(e) => inputTodoItem(e.target.value)} onKeyDown={(e) => addTodoItem(e)} />
                        <div className="addIcon" onClick={clickAddTodoItem}>
                            <img src="./assets/images/add.svg" alt="" />
                        </div>
                    </div>
                    <div className="todo_listBox">
                        <div className="todo_listBox_tab">
                            <div className={caseState === 'All' ? 'todo_listBox_tab_item action' : 'todo_listBox_tab_item'} onClick={() => handleChangeCaseState("All")}>{t('All')}</div>
                            <div className={caseState === 'unCompleted' ? 'todo_listBox_tab_item action' : 'todo_listBox_tab_item'} onClick={() => handleChangeCaseState("unCompleted")}>{t('unCompleted')}</div>
                            <div className={caseState === 'Completed' ? 'todo_listBox_tab_item action' : 'todo_listBox_tab_item'} onClick={() => handleChangeCaseState("Completed")}>{t('Completed')}</div>
                        </div>
                        <div className="todo_listBox_list">
                            {
                                filterTodoArr.length > 0 ?
                                    filterTodoArr.map((item) => {
                                        return (
                                            <div className='todoItem' key={item.id}>
                                                <div className="checkBox" onClick={() => handleAlreadyDone(item.id)}>
                                                    {item.completed_at ? <img src="./assets/images/Vector.svg" alt="" /> : ''}
                                                </div>
                                                <span style={{ textDecoration: item.completed_at ? 'line-through' : 'none' }}>{item.content}</span>
                                                <div className="delete" onClick={() => handleDeleteItem(item.id)}>
                                                    <img src="./assets/images/delete.svg" alt="" />
                                                </div>
                                            </div>
                                            // <></>
                                        )
                                    }) :
                                    <div className="empty">
                                        <img src="./assets/images/empty.png" alt="" />
                                        <span>{caseState === 'All' ? t('NoTo-dosYet') : caseState === 'unCompleted' ? t('NoTo-dosYetToBeCompleted') : t('NoTo-dosCompletedYet')}</span>
                                    </div>
                            }
                        </div>
                        <div className="todo_listBox_done">
                            <div className="haveDoneNum">{
                                caseState === 'All' ? filterTodoArr.length + ' ' + t('items') : caseState === 'unCompleted' ?
                                    filterTodoArr.length + ' ' + t('itemsUnCompleted') :
                                    filterTodoArr.length + ' ' + t('itemsCompleted')
                            }</div>
                            <div className="clearDone" onClick={cleanAllTodo}>{t('ClearCompletedItems')}</div>
                        </div>
                    </div>
                </div>

            </div>
        </StyledTodo>
    )
}
