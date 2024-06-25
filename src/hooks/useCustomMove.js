import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getQuery = (queryStr, defaultValue) => {
	if (!queryStr) {
		return defaultValue;
	}
	return parseInt(queryStr);
};

const useCustomMove = () => {
	const navigate = useNavigate();

	// 현재 페이지를 다시 클릭해도 서버 호출이 되도록 도와주는 state 값
	const [refresh, setRefresh] = useState(false);

	// 쿼리스트링에 page, size 꺼내기 위해 객체 생성
	const [queryStr] = useSearchParams();
	const page = getQuery(queryStr.get("page"), 1);
	const size = getQuery(queryStr.get("size"), 10);
	const queryDefault = createSearchParams({ page: page, size: size }).toString();

	// 리스트로 이동 : default 페이지로 이동 or 외부에서 이동할 페이지값 주는 버전
	const moveToList = (pageParam) => {
		let query = "";
		if (pageParam) {
			const pageNum = getQuery(pageParam.page, 1);
			const sizeNum = getQuery(pageParam.size, 10);
			query = createSearchParams({ page: pageNum, size: sizeNum }).toString();
		} else {
			query = queryDefault;
		}
		setRefresh(!refresh);
		navigate({ pathname: "../list", search: query });
	};

	// 수정으로 이동
	const moveToModify = (num) => {
		navigate({ pathname: `../modify/${num}`, search: queryDefault });
	};

	// 조회(상세)로 이동
	const moveToRead = (num) => {
		navigate({ pathname: `../read/${num}`, search: queryDefault });
	};

	// 각 이동 함수를 객체 형태로 리턴
	return { moveToList, moveToModify, moveToRead, refresh, page, size };
};

export default useCustomMove;
