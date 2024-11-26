import Modal from "../modal/Modal";

const Home = () => {
  return (
    <div className="h-screen bg-slate-100">
      <div className="flex justify-center pt-10">
        <button className="bg-white text-black rounded-xl px-5 py-3 text-xl">
          Open Modal
        </button>
      </div>
      <Modal/>
    </div>
  );
};

export default Home;
