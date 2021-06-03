import 'whatwg-fetch'
import React from "react";
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { render } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks'
import CommentsList from '../src/components/Comments/CommentsList';
import { getCommentsFromPost } from '../src/data/Comments';
import { IComment } from "../src/ts/interfaces/comments.interface";

describe("<CommentsList/>", () => {
    it("renders without crashing", () => {
        render(
            <Provider store={store}>
                <CommentsList/>
            </Provider>
        )
    })
    it("should receive comments related to the post from the API", async () => {
        let comments : [IComment] = await getCommentsFromPost("1");
        expect(comments.length).toBeGreaterThan(0);
    })
    it("should update comment state when Sent", async () => {
        const { result } = renderHook(() => CommentsList())
        console.log(result.current)
    })
})