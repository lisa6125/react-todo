import React, { useState, useEffect } from 'react'

import { useNavigate, Link } from 'react-router-dom'

import { useForm } from "react-hook-form"
// redux
import { useDispatch, useSelector } from 'react-redux'
//i18n
import { useTranslation } from 'react-i18next'
//style
import { StyledRegister } from './StyledRegister'
// action
import { registerAndSignInFetchUsers } from '../../redux'
// dispatch type
import { AppDispatch, RootStore } from '../../redux/store'

// img
import boardMan from '../../assets/images/board-man.png'

interface TypeUser {
  email: string,
  password: string,
  nickname: string,
  repassword: string,
}

export default function Register() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<TypeUser>()

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  const store = useSelector((store: RootStore) => store)

  const onSubmit = (data: any) => {
    const form = {
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
          <img src={boardMan} alt="" />
        </div>
        <div className="register_form">
          <div className="title">{t('register_account')}</div>
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className='formList'>
              <label >Email：
                <input

                  type="email"
                  placeholder={t('PleaseEnterEmail')}
                  {...register("email", {
                    required: { value: true, message:`*${t('ThisFieldIsRequired')}`},
                    pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:`*${t('DoesNotMeetEmailRules')}`}
                  })}
                />
              </label>
              <div className="error-message">
                {errors.email?.message}
              </div>
            </div>
            <div className='formList'>
              <label >{t('YourNickname')}：
                <input

                  type="nickname"
                  placeholder={t('PleaseEnterNickname')}
                  {...register("nickname", {
                    required: { value: true, message: `*${t('ThisFieldIsRequired') }` }
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
                {t('Password')}：
                <input
                  type="password"
                  placeholder={t('PleaseEnterPassword')}
                  {...register("password", {
                    required: { value: true, message: `*${t('ThisFieldIsRequired') }`},
                    minLength: { value: 8, message:`*${t('PasswordMustBeAtLeast8')}` },
                  })}
                />
              </label>
              <div className="error-message">
                {errors.password?.message}
              </div>
            </div>
            <div className='formList'>
              <label>
                {t('EnterThePasswordAgain')}：
                <input
                  type="password"
                  placeholder={t('PleaseEnterThePasswordAgain')}
                  {...register("repassword", {
                    required: { value: true, message:`*${t('ThisFieldIsRequired')}`},
                    validate: {
                      message: (value) => {
                        if (value !== watch('password')) {
                          return `*${t('DifferentfromPassword')}`
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
            <Link to='/SignIn' className="login">{t('sign_in')}</Link>
          </form>
        </div>
      </div>
    </StyledRegister>
  );
}
