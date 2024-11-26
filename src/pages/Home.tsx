import { useState } from "react";
import Modal from "../modal/Modal";

const Home = () => {

const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div className="h-screen bg-slate-100">
      <div className="flex justify-center pt-10">
        <button onClick={()=>setModalOpen(true)} className="bg-white text-black rounded-xl px-5 py-3 text-xl">
          Open Modal
        </button>
      </div>
      <Modal modalOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;
