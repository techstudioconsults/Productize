interface prop {
    name?: string;
}

const MyTest = ({ name }: prop) => {
    return (
        <div>
            <button>Click me</button>
            <h4 data-test="test-name-header">{name || `Kingsley`}</h4>
        </div>
    );
};

export default MyTest;
