

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>
          {children}
        </main>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Josefin Sans', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <style jsx>{`
        div {
          display: grid;
          height: 100vh;
          place-items: center;
        }
        main {
          background: #fff;
          background-image: url("/bg-mobile-light.jpg");
          background-repeat: no-repeat;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          height: 100%;
          width: 100%;

        }
        @media (min-width: 375px) {
          main {
            height: 90vh;
            width: 375px;
          }
        }
      `}</style>
    </>
  );
}
