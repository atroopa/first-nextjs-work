import Header from "./Header";
import Nav from "./Nav";



export default function Layout({children}) {
    return (
      <div>
        <Nav/>
        <div className="flex flex-col justify-center items-center w-full h-full bg-gray-200">
            <main >
                <Header/>
                {children}
            </main>
        </div>
      </div>
    )
  }

