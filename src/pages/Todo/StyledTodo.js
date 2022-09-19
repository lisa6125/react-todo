import styled from 'styled-components';

export const StyledTodo = styled.div`
  * {
    box-sizing: border-box;
  }
  .todo {
    background: #ffd370;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 70%;
      background-color: #fff;
      clip-path: polygon(0 60%, 100% 15%, 100% 100%, 0% 100%);
    }
    &_container {
      margin: 0 auto;
      max-width: 500px;
      min-width: 300px;
      width: 80%;
      z-index: 5;
    }
    &_input {
      position: relative;
      input {
        width: 100%;
        height: 47px;
        background: #ffffff;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        border: none;
        outline: none;
        padding: 12px 16px;
        color: #9f9a91;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
      }
      .addIcon {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
    &_listBox {
      height: 100%;
      max-height: 580px;
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      margin-top: 16px;
      position: relative;
      padding-bottom: 71px;
      &_tab {
        width: 100%;
        border-bottom: 2px solid #efefef;
        &_item {
          width: 33.33%;
          display: inline-block;
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
          color: #9f9a91;
          padding: 16px 0;
          cursor: pointer;
        }
        .action {
          border-bottom: 3px solid #ffb100;
          color: #ffb100;
        }
      }
      &_list {
        padding: 24px;
        overflow: auto;
        max-height: 350px;
        &::-webkit-scrollbar-track {
          border-radius: 10px;
          margin: 5px;
        }
        &::-webkit-scrollbar {
          width: 5px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background-color: #c1c1c1;
        }
        .empty {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          span {
            margin-top: 30px;
            color: #9f9a91;
          }
        }
        .todoItem {
          display: flex;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #e5e5e5;
          cursor: default;
          &:last-child {
            border: none;
          }
          .checkBox {
            width: 20px;
            height: 20px;
            border: 1px solid #9f9a91;
            border-radius: 5px;
            margin-right: 16px;
            display: inline-block;
            cursor: pointer;
          }
          span {
            max-width: 300px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .delete {
            justify-items: flex-end;
            margin-left: auto;
            margin-right: 10px;
            width: 15px;
            height: 15px;
            cursor: pointer;
            display: none;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          &:hover {
            span {
              color: #ffb100;
            }
            .delete {
              display: block;
            }
          }
        }
      }
      &_done {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0 24px;
        padding: 25px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 48px);
        border-top: 1px solid #efefef;
        .haveDoneNum {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #333333;
          cursor: default;
        }
        .clearDone {
          cursor: pointer;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #9f9a91;
        }
      }
    }
    .nav {
      width: 100%;
      height: 72px;
      padding: 16px 34px;
      display: flex;
      &_logo {
        flex-grow: 1;
        cursor: pointer;
      }
      &_user {
        margin-right: 24px;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        color: #333333;
        cursor: pointer;
      }
      &_logout {
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #333333;
        cursor: pointer;
      }
    }
  }
`;
