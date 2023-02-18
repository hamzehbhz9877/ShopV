import Header from "@/layout/home/header";
import Footer from "@/layout/home/footer";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <div className="mobile">
      <div className="container">
          <header className="header ">
              <Header/>
          </header>

      </div>
        <main className="container">{children}</main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
