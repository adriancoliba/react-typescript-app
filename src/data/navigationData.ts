type NonEmptyArray<T> = [T, ...T[]];

const navigationData: NonEmptyArray<string> = ["Home", "Discover", "Store", "Inbox", "Profile"];

export default navigationData;
