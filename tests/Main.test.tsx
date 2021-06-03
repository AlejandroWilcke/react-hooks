import React from "react";
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { render, screen, fireEvent } from "@testing-library/react";
import Main from '../src/components/Main/Main';

describe("<Main/>", () => {
    it("renders without crashing", () => {
        render(
            <Provider store={store}>
                <Main/>
            </Provider>
        )
    })
})