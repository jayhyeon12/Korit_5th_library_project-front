/**@jsxImportSource @emotion/react */
import { useMutation, useQuery } from "react-query";
import * as s from "./style";
import Select from "react-select";
import { getAllBookTypeRequest, getAllCategoryRequest } from "../../../apis/api/option";
import { useEffect, useRef, useState } from "react";
import BookRegisterInput from "../../../components/BookRegisterInput/BookRegisterInput";
import { CiSquarePlus } from "react-icons/ci";
import { useBookRegisterInput } from "../../../hooks/useBookRegisterInput";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import RightTopButton from "../../../components/RightTopButton/RightTopButton";
import { registerBook } from "../../../apis/api/bookApi";
import AdminBookSearch from "../../../components/AdminBookSearch/AdminBookSearch";
import { useRecoilState } from "recoil";
import { selectedBookState } from "../../../atoms/adminSelectedBookAtom";

function BookManagement(props) {
    const [ bookTypesOptions, setBookTypeOptions ] = useState([]);
    const [ categoryOptions, setCategoryOptions ] = useState([]);

    const fileRef = useRef();
    const inputRefs = [
        useRef(), 
        useRef(), 
        useRef(), 
        useRef(), 
        useRef(), 
        useRef(), 
        useRef(), 
        useRef()
    ];

    const bookTypeQuery = useQuery(
        ["booktypeQuery"], getAllBookTypeRequest, 
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setBookTypeOptions(() => response.data.map(bookType => {
                    return {
                        value: bookType.bookTypeId,
                        label: bookType.bookTypeName
                    }
                }));
            },

        });

    const categoryQuery = useQuery(
        ["categoryQuery"], getAllCategoryRequest, 
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setCategoryOptions(() => response.data.map(category => {
                    return {
                        value: category.categoryId,
                        label: category.categoryName
                    }
                }));
            },
        });

    const registerBookMutation = useMutation({
        mutationKey: "registerBookMutation",
        mutationFn: registerBook,
        onSuccess: response => {

        },
        onError: error => {

        }
    });

    const nextInput = (ref) => {
        ref.current.focus();
    }

    const submit = () => {
        registerBookMutation.mutate({
            isbn: isbn.value,
            bookTypeId: bookTypeId.value,
            categoryId: categoryId.value,
            bookName: bookName.value,
            author: author.value,
            publisher: publisher.value,
            coverImgUrl: imgUrl.value
        });
    }

    const bookId = useBookRegisterInput(nextInput, inputRefs[1]);
    const isbn = useBookRegisterInput(nextInput, inputRefs[2]);
    const bookTypeId = useBookRegisterInput(nextInput, inputRefs[3]);
    const categoryId = useBookRegisterInput(nextInput, inputRefs[4]);
    const bookName = useBookRegisterInput(nextInput, inputRefs[5]);
    const author = useBookRegisterInput(nextInput, inputRefs[6]);
    const publisher = useBookRegisterInput(nextInput, inputRefs[7]);
    const imgUrl = useBookRegisterInput(submit);
    const [ selectedBook ] = useRecoilState(selectedBookState);

    useEffect(() => {
        bookId.setValue(() => selectedBook.bookId)
        isbn.setValue(() => selectedBook.bookId)
        bookTypeId.setValue(() => ({value: selectedBook.bookTypeId, label: selectedBook.bookTypeName}))
        categoryId.setValue(() => selectedBook.bookId)
        bookName.setValue(() => selectedBook.bookId)
        author.setValue(() => selectedBook.bookId)
        publisher.setValue(() => selectedBook.bookId)
        imgUrl.setValue(() => selectedBook.bookId)
    }, [selectedBook])

    const selectStyles = {
        control: baseStyles => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none"
        }),
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
    
    if(files.length === 0) {
        e.target.value = "";
        return;
    }
        if(!window.confirm("파일을 불러오시겠습니까?")) {
            e.target.value = "";
            return;
        }
        const storageRef = ref(storage, `library/book/cover/${uuid()}_${files[0].name}`)
        const uploadTask = uploadBytesResumable(storageRef, files[0]);
        
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {},
            () => {
                alert("업로드가 완료됐습니다");
                getDownloadURL(storageRef)
                .then(url => {
                    imgUrl.setValue(() => url);
                });
            }
        )
    }


    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>도서 관리</h1>
                <RightTopButton onClick={submit}>확인</RightTopButton>
            </div>
            <div css={s.topLayout}>
                <table css={s.registerTable}>
                    <tbody>
                        <tr>
                            <th css={s.registerTh}>도서코드</th>
                            <td>
                                <BookRegisterInput 
                                value={bookId.value} bookref={inputRefs[0]} onChange={bookId.handleOnChange}
                                onKeyDown={bookId.handleOnKeyDown}/>
                            </td>
                            <th css={s.registerTh}>ISBN</th>
                            <td>
                                <BookRegisterInput 
                                value={isbn.value} bookref={inputRefs[1]} onChange={isbn.handleOnChange}
                                onKeyDown={isbn.handleOnKeyDown}/>
                            </td>
                            <td rowSpan={5} css={s.preview}>
                                <div css={s.imgBox}>
                                    <img src={
                                        !imgUrl.value 
                                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegZDhYp7xib4Rc4ZxRGe_cHEH5WrGL1wupA&usqp=CAU" 
                                        : imgUrl.value
                                    } alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>도서형식</th>
                            <td>
                                <Select styles={selectStyles} options={bookTypesOptions} onKeyDown={bookTypeId.handleOnKeyDown}
                                value={bookTypeId.value.value} inputValue={bookTypeId.value.label} onChange={bookTypeId.handleOnChange} ref={inputRefs[2]}/>
                            </td>
                            <th css={s.registerTh}>카테고리</th>
                            <td>
                                <Select styles={selectStyles} options={categoryOptions} onKeyDown={categoryId.handleOnKeyDown}
                                value={categoryId.value.value} inputValue={categoryId.value.label} onChange={categoryId.handleOnChange} ref={inputRefs[3]}/>
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>도서명</th>
                            <td colSpan={3}>
                                <BookRegisterInput 
                                value={bookName.value} bookref={inputRefs[4]} onChange={bookName.handleOnChange}
                                onKeyDown={bookName.handleOnKeyDown}/>
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>저자</th>
                            <td>
                                <BookRegisterInput 
                                value={author.value} bookref={inputRefs[5]} onChange={author.handleOnChange}
                                onKeyDown={author.handleOnKeyDown}/>
                            </td>
                            <th css={s.registerTh}>출판사</th>
                            <td>
                                <BookRegisterInput 
                                value={publisher.value} bookref={publisher[6]} onChange={publisher.handleOnChange}
                                onKeyDown={publisher.handleOnKeyDown}/>
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>표지URL</th>
                            <td colSpan={3}>
                                <div css={s.imgUrl}>
                                    <span css={s.imgUrlBox}>
                                        <BookRegisterInput 
                                        value={imgUrl.value} bookref={inputRefs[7]} onChange={imgUrl.handleOnChange}
                                        onKeyDown={imgUrl.handleOnKeyDown}/>
                                    </span>
                                    <input 
                                        type="file" 
                                        style={{
                                        display: "none"
                                    }}
                                    onChange={handleFileChange}
                                    ref={fileRef}
                                    />
                                    <button css={s.imgAddButton} onClick={()=> fileRef.current.click()}>
                                        <CiSquarePlus/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <AdminBookSearch
                selectStyle={selectStyles}
                bookTypeOptions={bookTypesOptions}
                categoryOptions={categoryOptions}
            />
        </div>
    );
}

export default BookManagement;