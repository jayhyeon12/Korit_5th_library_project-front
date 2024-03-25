/**@jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import { getPrincipalRequest } from '../apis/api/princiapl';
import { useQuery } from 'react-query';
import RootSideMenuLeft from '../components/RootSideMenuLeft/RootSideMenuLeft';
import RootHeader from '../components/RootHeader/RootHeader';
import FullSizeLoader from '../components/FullSizeLoader/FullSizeLoader';
import MyPage from '../pages/MyPage/MyPage';
import PageContainer from '../components/PageContainer/PageContainer';
import PasswordEditPage from '../pages/PasswordEditPage/PasswordEditPage';
import BookManagement from '../pages/Admin/BookManageMent/BookManagement';

/* useQuery(리액트 쿼리 내 훅함수): get 요청 시 사용
1. 첫 번째 매개변수 -> 배열 ["key 값", dependency]
2. 두 번째 매개변수 -> 요청 메소드(async, await)
3. 세 번째 매개변수 -> 옵션
    {
        retry: 0, (요청 재시도 횟수)
        refetchOnWindowFocus: false, (창에서 포커스가 이동할 때 refetch 여부)
        onSuccess: 함수, (요청 성공 시 실행하는 함수)
        onError: 함수, (요청 오류 시 실행하는 함수)
        enabled: true or false (동기적 처리 여부)
    }
*/

function AuthRoute(props) {

    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, 
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log("onSuccess");
            console.log(response);
        },
        onError: error => {
            console.log("오류");
            console.log(error);
        }
    });

    return (
        <>
            <RootSideMenuLeft />
            <RootHeader />
            <PageContainer>
            {
                principalQuery.isLoading 
                ? <FullSizeLoader size={10}/>
                : <Routes>
                    <Route path="/auth/*" element={ <AuthPage /> } />
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/account/mypage" element={ <MyPage /> } />
                    <Route path="/account/edit/password" element={ <PasswordEditPage /> } />
                    <Route path='/admin/book/management/' element={ <BookManagement /> } />

                </Routes>
            }
            </PageContainer>
        </>
    );
}

export default AuthRoute;