export default function CreateTodoInput() {
    return (
        <>
            <div></div>
            <input type="text" placeholder="Create a new todo..."/>
            <style jsx>{`
                div {
                    height: 25px;
                    width: 25px;
                    border: 1px solid gray;
                    border-radius: 50%;
                    position: relative;
                    left: 60px;
                    top: 35px;
                }
                input {
                    width: 82%;
                    height: 45px;
                    margin-left: 30px;
                    border-radius: 7px;
                    border: none;
                    font-weight: 600;
                    padding-left: 70px;
                    outline: none;
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}