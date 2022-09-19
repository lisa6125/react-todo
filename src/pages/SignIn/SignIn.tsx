import React, { useState, useEffect } from 'react'

import { useNavigate, Link } from 'react-router-dom'
//style
import { StyledSignIn } from './StyledSignIn'

import { useForm } from "react-hook-form"
// redux
import { useDispatch, useSelector } from 'react-redux'
// dispatch type
import { AppDispatch, RootStore } from '../../redux/store'
// action
import { signInFetchUsers } from '../../redux'
//i18n
import { useTranslation } from 'react-i18next'

interface TypeUser {
  email: string,
  password: string,
}

export default function SignIn() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<TypeUser>()

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate()

  const { t, i18n } = useTranslation()

  const store = useSelector((store: RootStore) => store)

  const onSubmit = (data: any) => {
    let form = {
      user: {
        email: data.email,
        password: data.password
      }
    }
    dispatch(signInFetchUsers(form))
  }

  const onError = (errors: any) => console.log(errors)

  useEffect(() => {
    if (store.userStatus.user) {
      reset()
      navigate('/Todo')
    }
  }, [store])

  return (
    <StyledSignIn>
      <div className="signIn">
        <div className="pic">
          <img src="../assets/images/board-man.png" alt="" />
        </div>
        <div className="signIn_form">
          <div className="title">{t('sign_in')}</div>
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div className='formList'>
              <label >Email：
                <input

                  type="email"
                  placeholder={t('PleaseEnterEmail')}
                  {...register("email", {
                    required: { value: true, message: "*" + t('ThisFieldIsRequired') },
                    pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "*" + t('DoesNotMeetEmailRules') }
                  })}
                />
              </label>
              <div className="error-message">
                {errors.email?.message}
              </div>
            </div>
            <div className='formList'>
              <label>
                密碼：
                <input
                  type="password"
                  placeholder={t('PleaseEnterPassword')}
                  {...register("password", {
                    required: { value: true, message: "*" + t('ThisFieldIsRequired') },
                  })}
                />
              </label>
              <div className="error-message">
                {errors.password?.message}
              </div>
            </div>
            <input type="submit" value={t('sign_in')} />
            <Link to='/Register' className="register">{t('register_account')}</Link>
          </form>
        </div>
      </div>
    </StyledSignIn>
  )

}