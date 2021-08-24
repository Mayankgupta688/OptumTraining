export function WorkingWithProps(props) {
    return (
        <div>
            <h1>Input Name is {props.userName}</h1>
            <h1>Input Age is {props.userAge}</h1>
            <h1>Input Designation is {props.userDesignation}</h1>
        </div>
    )
}