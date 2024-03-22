/**@jsxImportSource @emotion/react */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function OAuth2SigninPage() {
    const [ searchparams ] = useSearchParams();
    const accessToken = searchparams.get("accessToken");

    useEffect(() => {
        localStorage.setItem("AccessToken", accessToken)
        window.location.replace("/");
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default OAuth2SigninPage;