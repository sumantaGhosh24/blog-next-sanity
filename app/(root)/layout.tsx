import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <main className="mx-auto my-10 max-w-6xl p-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
