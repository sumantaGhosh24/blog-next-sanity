import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <main className="mx-auto my-10 max-w-6xl rounded-md p-5 shadow-xl shadow-black dark:shadow-white">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
