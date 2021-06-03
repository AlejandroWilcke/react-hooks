import React from "react";
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { render, fireEvent } from "@testing-library/react";
import App from '../src/components/App';

describe("<App/>", () => {
    it("renders without crashing", () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    })
})