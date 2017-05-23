import styled from 'styled-components';
import colors from '../../styles/colors';

const button = () => {
    return `
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 0
    `;
};

export const Container = styled.div`
    width: 320px;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrey};
    border-radius: 3px;
    padding: 16px 16px 20px;
    margin: 8px;
    position: relative;
    &:hover {
        background: #fafafa;
    }
    &:active {
        background: #f7f7f7;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    & img {
        height: 25px;
        width: 25px;
        border-radius: 999em;
    }
`;

export const LabelWrapper = styled.div`
    padding: 6px 8px;
    border: 1px solid #e5e5e5;
    display: inline-block;
    border-radius: 3px;
    margin-right: 8px;
    margin-bottom: 4px;
    & span {
        color: rgba(19, 21, 23, 0.8);
        font-size: 14px;

    }
`;

export const Labels = styled.div`
    position: relative;
    display: block;
    padding-top: 8px;
`;

export const Label = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 3px;
    line-height: 1.54;
    margin-right: 4px;
    display: inline-block;
`;

export const Main = styled.div`
    margin-bottom: 8px;
    text-align: left;
    cursor: pointer;
    & h1 {
        font-size: 24px;
        color: rgba(19, 21, 23, 0.9);
        letter-spacing: -0.12px;
        line-height: 1.15;
        font-weight: bold;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    & h2 {
        font-size: 20px;
        color: rgba(19, 21, 23, 0.5);
        letter-spacing: -0.08px;
        padding-top: 8px;
        max-width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    & p {
        padding-top: 12px;
        font-size: 16px;
        color: rgba(19, 21, 23, 0.8);
        line-height: 1.38;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    & img {
        max-width: 288px;
        width: 100%;
        margin-bottom: 16px;
        ${''/* height: 100px; */}
    }
    & button {
        margin-top: 16px;
        ${button()};
        color: ${colors.grey}
    }
`;

export const Paragraph = styled.div`
    max-height: 4.1em;
    overflow: hidden;
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & div {
        display: flex;
        align-items: center;
    }
    & span {
        display: flex;
        align-items: center;
    }
    & [data-title] {
        position: relative;
        &:after {
            position: absolute;
            font-size: 14px;
            border-radius: .4rem;
            content: attr(data-title);
            padding: 6px 10px;
            color: rgba(255,255,255,.8);
            background-color: #000;
            box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
            color: $wenk-font-color;
            line-height: 1.25rem;
            text-align: left;
            z-index: 1;
            pointer-events: none;
            display: block;
            opacity: 0;
            visibility: hidden;
            left: 50%;
            transform: translate(-50%, 10px);
            white-space: pre;
            width: auto;
        }
        &:before {
            content: '';
            height: 10px;
            width: 10px;
            transform: rotate(45deg);
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            border-radius: 3px;
            top: 31px;
            background: #000;
            opacity: 0;
            visibility: hidden;
        }
        &:hover {
            overflow: visible;
            &:after {
                display: block;
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, 10px);
            }
            &:before {
                opacity: 1;
                visibility: visible;
            }

            &[data-title-pos="bottom"] {
                &:after {
                    bottom: auto;
                    top: 100%;
                    left: 50%;
                    transform: translate(-50%, 10px);
                }
                &:hover {
                    &:after {
                        transform: translate(-50%, 10px);
                    }
                }
            }
        }
`;

export const Time = styled.span`
    font-size: 12px;
    color: ${colors.grey};
    padding-top: 8px;
    display: block;
`;

export const Icon = styled.div`
    height: 18px;
    display: flex;
    align-items: center;
    margin-right: 16px;
    cursor: pointer;
    position: relative;
    & p {
        color: ${colors.black};
        font-size: 14px;
        margin-left: 4px;
    }
    & svg {
        height: 100%;
        height: 18px;
    }
    & [data-title] {
        position: relative;
        &:after {
            position: absolute;
            font-size: 14px;
            border-radius: .4rem;
            content: attr(data-title);
            padding: 6px 10px;
            color: rgba(255,255,255,.8);
            background-color: #131517;
            box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
            color: $wenk-font-color;
            line-height: 1.25rem;
            text-align: left;
            z-index: 1;
            pointer-events: none;
            display: block;
            opacity: 0;
            visibility: hidden;
            left: 50%;
            transform: translate(-50%, 10px);
            white-space: pre;
            width: auto;
        }
        &:before {
            content: '';
            height: 10px;
            width: 10px;
            transform: rotate(45deg);
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            border-radius: 3px;
            top: 24px;
            background: #131517;
            opacity: 0;
            visibility: hidden;
        }
        &:hover {
            overflow: visible;
            &:after {
                display: block;
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, 10px);
            }
            &:before {
                opacity: 1;
                visibility: visible;
            }

            &[data-title-pos="bottom"] {
                &:after {
                    bottom: auto;
                    top: 100%;
                    left: 50%;
                    transform: translate(-50%, 10px);
                }
                &:hover {
                    &:after {
                        transform: translate(-50%, 10px);
                    }
                }
            }
        }
    }
`;

export const Settings = styled.div`
    position: absolute;
    width: 160px;
    bottom: -72px;
    left: -22px;
    z-index: 99;
    display: block !important;
    & div div div {
        position: relative;
        z-index: 1;
        margin-right: 0;
        width: 100%;
        height: initial;
    }
    & div div div:last-child {
        margin-bottom: 0;
    }
    & div div div:hover {
        color: #fff;
    }
    & div div div:hover:before {
        content: '';
        background: #F76664;
        border-radius: 3px;
        padding: 4px 8px;
        color: #fff;
        position: absolute;
        margin: -8px;
        width: calc(100% + 16px);
        height: 32px;
        z-index: -1;
    }
`;

export const H1 = styled.h1`
    width: 100%;
`;

export const H2 = styled.h2`
    width: 100%;
`;

export const P = styled.p`
    width: 100%;
`;
