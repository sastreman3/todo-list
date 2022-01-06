import Head from "next/head";
import AppLayout from "../components/AppLayout";
import CreateTodoInput from "../components/CreateTodoInput";
import ListOfTodos from "../components/ListOfTodos";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo-list</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap" rel="stylesheet"/>
      </Head>
      <AppLayout>
        <div>
          <h1>TODO</h1>
          <figure>
            <img src='/icon-moon.svg' alt='moon' />
          </figure>
        </div>
        <CreateTodoInput />
        <ListOfTodos />
      </AppLayout>
      <style jsx>{`
        div div {
          display: flex;
          margin-left: 30px;
          margin-top: 20px;
          justify-content: space-between;
          align-items: baseline;
        }
        h1 {
          letter-spacing: 12px;
          color: white;
          font-weight: 700;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
