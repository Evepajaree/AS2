import { useState } from "react";
import Topbar from "../components/Topbar";
import NavLayout from "../layouts/NavLayout";


const chart: React.FC = () => {
    return (
        <NavLayout>
          <div className="bg-lightbg min-h-screen pt-8">
            <div className="flex justify-center w-full px-16 relative mb-14">
              <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
                 <form>
                    <h3 className="text-3xl font-bold text-center mb-7">Chart</h3>
                      <div className="flex justify-center mb-5 space-x-12">
             
                      <div style={{ margin: "10px" }}>
                      <p className="text-lg">Token 1</p>
                         <input
                          type="text"
                          id="token1"
                          name="token1"
                          placeholder="Fill in token"
                          className="p-2 rounded shadow w-full"
                      />
                     </div>
                    
                     <div style={{ margin: "10px" }}>
                     <p className="text-lg">Token 2</p>
                        <input
                         type="text"
                         id="token2"
                         name="token2"
                         placeholder="Fill in token"
                         className="p-2 rounded shadow w-full"
                        />
                     </div>
        </div>
                    <div style={{ margin: "10px" }} className="flex justify-center">
                    <button className="rounded bg-darkbg text-white px-12 py-4 ">Fetch</button>
                    </div>
                    

 
    </form>
    </div>
           <div className="bg-darkbg h-full w-full absolute -top-20" />
    </div> 
                <div className="flex justify-center w-full px-16 relative mb-14">
                    <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
                        <div className="flex justify-center mb-5 space-x-12">
                             <img src="/ss.jpg" />
                        </div>
                    </div>
                </div>
    </div>
     


        </NavLayout>
    );
}

export default chart