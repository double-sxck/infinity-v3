import { useEffect, useState } from "react";
import { Column, Row } from "../../styles/ui";
import * as S from "./style";

const Modal = ({closeModal}: {closeModal: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [keywords, setKeywords] = useState({characters: "", events: "", backgrounds: ""});
    const [contents, setContents] = useState("");

    useEffect(() => {
        const keyword = localStorage.getItem("keywords");
        setKeywords(() => JSON.parse(keyword!));

        
        const content = localStorage.getItem("novel");
        setContents(() => content!);
        
    }, [])

    return (
        <S.Background
            onClick={() => closeModal(() => false)}
        >
            <Column justifyContent="center" alignItems="center" gap={4}>
                <Row gap={4}>
                    <S.ModalKeyword><S.ModalKeywordTitle>인물</S.ModalKeywordTitle>{keywords.characters}</S.ModalKeyword>
                    <S.ModalKeyword><S.ModalKeywordTitle>사건</S.ModalKeywordTitle>{keywords.events}</S.ModalKeyword>
                    <S.ModalKeyword><S.ModalKeywordTitle>배경</S.ModalKeywordTitle>{keywords.backgrounds}</S.ModalKeyword>
                </Row>
                <S.ViewNovel>
                    {contents}
                </S.ViewNovel>
            </Column>
        </S.Background>
    );
};

export default Modal;