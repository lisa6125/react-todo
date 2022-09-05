import styled from 'styled-components';

export const StyledRegister = styled.div`
  * {
    box-sizing: border-box;
  }
  .register {
    background: #ffd370;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px 100px;
    &_form {
      width: 80%;
      max-width: 310px;
      .title {
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        color: #333333;
        margin-bottom: 24px;
        align-self: flex-start;
      }
      form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px 0px;
      }
      .formList {
        width: 100%;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #333333;
        input {
          display: block;
          background: #ffffff;
          outline: none;
          width: 100%;
          border: none;
          height: 47px;
          border-radius: 10px;
          padding: 12px 16px;
        }
        .error-message {
          font-size: 12px;
          color: #df0000;
          font-weight: 500;
          width: 100%;
          height: 10px;
        }
      }
      input[type='submit'] {
        background: #333333;
        border-radius: 10px;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        color: #ffffff;
        padding: 12px 48px;
        border: none;
        cursor: pointer;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .login {
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        cursor: pointer;
      }
    }
  }
`;
