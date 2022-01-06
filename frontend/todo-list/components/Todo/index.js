export default function Todo({ title }) {
    return (
        <div>
            <div></div>
            <span>{title}</span>
            <figure>
                <img src='/icon-cross.svg' alt='moon' />
            </figure>
            <style jsx>{`
                div {
                    display: flex;
                    width: 82%;
                    height: 45px;
                    margin-left: 30px;
                    border-radius: 7px;
                    border: none;
                    font-weight: 600;
                    align-items: center;
                    justify-content: flex-start;
                    background-color: white;
                }
                div div {
                    height: 25px;
                    width: 25px;
                    border: 1px solid gray;
                    border-radius: 50%;
                    margin-right: 15px;
                }

                span {
                    width: 200px;
                }

                figure {
                    margin: 0;
                }
            `}</style>
        </div>
    )
}