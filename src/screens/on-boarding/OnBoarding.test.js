import React from "react";

import { render, screen, fireEvent,  } from "@testing-library/react-native";

import OnBoardingScreen from './OnBoardingScreen';
import { MalOnBoard, GogglesOnBoard, HorsZoa } from "./OnBoardAssets";


/*-------------------------------*
 *   Render Screen Test          *
---------------------------------*/
describe(OnBoardingScreen, () => {
    test('should render component properly', () => {
        const { debug } = render(<OnBoardingScreen />);
        debug();
    });

    /*-------------------------------*
     *   Render Images Tests         *
    ---------------------------------*/
    test('should render component properly', () => {
        const { debug } = render(<MalOnBoard />);
        debug();
    });
    test('should render component properly', () => {
        const { debug } = render(<GogglesOnBoard />);
        debug();
    });
    test('should render component properly', () => {
        const { debug } = render(<HorsZoa />);
        debug();
    });

    /*-------------------------------*
     *   Render Text/Button          *
    ---------------------------------*/
    it('should render components title', () => {
    const { getByTestId, getByText } = render(<OnBoardingScreen />);
    const title = getByText('I Shoot Coral');
    expect(title).toBeTruthy();
    });
    it('should render components title', () => {
    const { getByTestId, getByText } = render(<OnBoardingScreen />);
    const button = getByText('Okay!');
    expect(button).toBeTruthy();
    });
});
