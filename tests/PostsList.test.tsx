import 'whatwg-fetch'
import React from "react";
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { render, screen, fireEvent } from "@testing-library/react";
import PostsList from '../src/components/Posts/PostsList';
import { getPosts } from '../src/data/Posts';
import { IPost } from "../src/ts/interfaces/post.interface";

describe("<PostsList/>", () => {
    it("renders without crashing", () => {
        render(
            <Provider store={store}>
                <PostsList/>
            </Provider>
        )
    })
    it("should receive posts from the API", async () => {
        let posts : [IPost] = await getPosts();
        expect(posts.length).toBeGreaterThan(0);
    })
})