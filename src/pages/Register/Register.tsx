import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import { useForm } from "react-hook-form"
// redux
import { useDispatch, useSelector } from 'react-redux'
//i18n
import { useTranslation } from 'react-i18next'
//style
import { StyledRegister } from './StyledRegister'
// action
import { registerAndSignInFetchUsers, signInFetchUsers } from '../../redux'
// dispatch type
import { AppDispatch, RootStore } from '../../redux/store'
// 提示
import toast from 'react-hot-toast';

interface TypeUser {
  email: string,
  password: string,
  nickname: string,
  repassword: string,
}

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<TypeUser>()

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  const store = useSelector((store: RootStore) => store)

  const onSubmit = (data: any) => {
    let form = {
      user: {
        email: data.email,
        nickname: data.nickname,
        password: data.password
      }
    }
    dispatch(registerAndSignInFetchUsers(form))
  }

  useEffect(() => {
    if (store.userStatus.registerStatus && store.userStatus.user) {
      reset()
      navigate('/Todo')
    }
  }, [store])

  const onError = (errors: any) => console.log(errors)
  const { t, i18n } = useTranslation()


  return (
    <StyledRegister>
      <div className="register">
        <div className="pic">
          <img src="../assets/images/board-man.png" alt="" />
        </div>
        <div className="register_form">
          <div className="title">註冊帳號</div>
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className='formList'>
              <label >Email：
                <input

                  type="email"
                  placeholder="請輸入Email"
                  {...register("email", {
                    required: { value: true, message: "*此欄位必填" },
                    pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "*不符合 Email 規則" }
                  })}
                />
              </label>
              <div className="error-message">
                {errors.email?.message}
              </div>
            </div>
            <div className='formList'>
              <label >您的暱稱：
                <input

                  type="nickname"
                  placeholder="請輸入您的暱稱"
                  {...register("nickname", {
                    required: { value: true, message: "*此欄位必填" }
                  }
                  )}
                />
              </label>
              <div className="error-message">
                {errors.nickname?.message}
              </div>
            </div>
            <div className='formList'>
              <label>
                密碼：
                <input
                  type="password"
                  placeholder="請輸入密碼"
                  {...register("password", {
                    required: { value: true, message: "*此欄位必填" },
                    minLength: { value: 8, message: "*密碼至少為 8 碼" },
                  })}
                />
              </label>
              <div className="error-message">
                {errors.password?.message}
              </div>
            </div>
            <div className='formList'>
              <label>
                再次輸入密碼：
                <input
                  type="password"
                  placeholder="再次輸入密碼"
                  {...register("repassword", {
                    required: { value: true, message: "*此欄位必填" },
                    validate: {
                      message: (value) => {
                        if (value !== watch('password')) {
                          return '*與密碼不同'
                        }
                      },
                    }
                  })
                  }
                />
              </label>
              <div className="error-message">
                {errors.repassword?.message}
              </div>
            </div>
            <input type="submit" value={t('register_account')} />
            <div className="login">{t('sign_in')}</div>
          </form>
        </div>
      </div>
    </StyledRegister>
  );
}

export default Register;