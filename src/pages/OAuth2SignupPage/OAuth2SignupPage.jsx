/**@jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { useMutation } from 'react-query';
import { OAuth2SignupRequest } from '../../apis/api/Signup';
import AuthPageInput from '../../components/AuthPageInput/AuthPageInput';
import RightTopButton from "../../components/RightTopButton/RightTopButton";

function OAuth2SignupPage() {
    const [ searchParams ] = useSearchParams();
    const navigate = useNavigate();

    const [ username, usernameChange, usernameMessage, setUsernameValue, setUsernameMessage ] = useInput("username");
    const [ password, passwordChange, passwordMessage ] = useInput("password");
    const [ checkPassword, checkPasswordChange ] = useInput("checkPassword");
    const [ name, nameChange, nameMessage ] = useInput("name");
    const [ email, emailChange, emailMessage ] = useInput("email");
    const [ checkPasswordMessage, setCheckPasswordMessage ] = useState("null");

    const oAuth2SignupMutation = useMutation({
        mutationKey: "oAuth2SignupMutation",
        mutationFn: OAuth2SignupRequest,
        onSuccess: response => {
            navigate("/auth/signin")
        },
        onError: error => {
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                for(let [ k, v ] of errorEntries) {
                    if(k === "username") {
                        setUsernameMessage(() => {
                            return {
                                type: "error",
                                text: v
                            }
                        })
                    }
                }
            } else {
                alert("회원가입 오류");
            }
        }
    });

    useEffect(() => {
        if(!checkPassword || !password) {
            setCheckPasswordMessage(() => null);
            return;
        }
        if(checkPassword === password) {
            setCheckPasswordMessage(() => {
                return {
                    type: "success",
                    text: ""
                }
            })
        } else {
            setCheckPasswordMessage(() => {
                return {
                    type: "error",
                    text: "비밀번호가 일치하지 않습니다"
                }
            })
        }
    }, [password, checkPassword]);

    const handleSignupSubmit = () => {
        const checkFlags = [
            usernameMessage?.type,
            passwordMessage?.type,
            checkPasswordMessage?.type,
            nameMessage?.type,
            emailMessage?.type
        ];
        if(checkFlags.includes("error") || checkFlags.includes(undefined) || checkFlags.includes(null)) {
            alert("가입 정보 확인이 필요합니다");
            return;
        }
        
        oAuth2SignupMutation.mutate({
            username,
            password,
            name,
            email,
            oauth2Name: searchParams.get("name"),
            providerName: searchParams.get("provider")
        });
    }

    return (
        <>
            <div css={s.header}>
                <h2>회원가입({searchParams.get("provider")})</h2>
                <RightTopButton onClick={handleSignupSubmit}>가입하기</RightTopButton>
            </div>
            <AuthPageInput type={"text"} name={"username"} placeholder={"사용자 이름"} value={username} onChange={usernameChange} message={usernameMessage}/>
            <AuthPageInput type={"password"} name={"password"} placeholder={"비밀번호"} value={password} onChange={passwordChange} message={passwordMessage}/>
            <AuthPageInput type={"password"} name={"checkPassword"} placeholder={"비밀번호 확인"} value={checkPassword} onChange={checkPasswordChange} message={checkPasswordMessage}/>
            <AuthPageInput type={"text"} name={"name"} placeholder={"이름"} value={name} onChange={nameChange} message={nameMessage}/>
            <AuthPageInput type={"text"} name={"email"} placeholder={"이메일"} value={email} onChange={emailChange} message={emailMessage}/>
        </>
    );
}

export default OAuth2SignupPage;