import styled from 'styled-components';

export const StyledHome = styled.div`
    background:#FFD370;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    .Home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0 10px;
    box-sizing: border-box;
        &_pic{
            width: 300px;
            height: 300px;
            margin: 0 auto;
            margin-bottom: 30px;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        &_text{
            font-weight: 700;
            font-size: 28px;
            line-height: 40px;
            margin-bottom: 30px;
            text-align: center;
        }
        &_chose{
            display: flex;
            align-items: center;
            gap: 0 20px;
            margin-bottom: 30px;
            &_item{
                width: 100px;
                height: 100px;
                font-size: 16px;
                display: inline-block;
                border-radius: 8px;
                border: 2px solid #333;
                text-align: center;
                line-height: 100px;
                cursor: pointer;
                &:hover{
                    color: white;
                    background: #000;
                }
            }
        }
        &_Language{
            margin: 0 auto;
            color: #fff;
            &_text{
                text-decoration: underline;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                span{
                margin-left: 5px;
                }
            }
            &_choice{
                background: #FFF;
                color: #000;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 8px;
                margin-top: 10px;
                padding:10px 20px;
                span{
                    cursor: pointer;
                    &:hover{
                    text-decoration: underline;
                    }
                }
            }
        }
    }
`