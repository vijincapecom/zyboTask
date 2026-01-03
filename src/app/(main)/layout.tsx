import WebFooter from "@/components/layouts/WebFooter";
import WebHeader from "@/components/layouts/WebHeader";

const HomeLayout = async ({ children }: ChildrenLayoutProps) => {

  return (
      <div className="min-h-screen bg-black flex flex-col">
      <WebHeader/>
      <main className='flex-1'>
      {children}
      </main>
     <WebFooter/>
    </div>
  );
};

export default HomeLayout;
