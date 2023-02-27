import { configure } from "@testing-library/react-native";

import '@testing-library/jest-native';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Setup Reanimated mocking for Drawer navigation
global.ReanimatedDataMock = { now: () => Date.now() };
require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();

// Enable excluding hidden elements from the queries by default
configure({
  defaultIncludeHiddenElements: false,
});