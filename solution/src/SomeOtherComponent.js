import YetAnotherCompoent from "./YetAnotherComponent";

const SomeOtherComponent = () => {
    return (
        <div style={
            {
                "width": "375px",
                "padding": "2rem"
            }
        }>
            <YetAnotherCompoent />
        </div>
    )
}

export default SomeOtherComponent;