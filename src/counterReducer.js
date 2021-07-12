const counterReducer = (counter = 0, action) => {
    switch (action.type) {
        case "ADDONE":
            return counter + 1;
        case "REMOVEONE":
            return counter - 1;
        case "ADDTEN":
            return counter + 10;
        case "REMOVETEN":
            return counter - 10;
        case "RESET":
            return (counter = 0);
        default:
            return counter;
    }
};

export default counterReducer;
