import React, { useEffect, useState, createRef, useRef } from "react";

// import styles from "./styles.module.css";
import Topbar from "../components/Topbar";
import NavLayout from "../layouts/NavLayout";



const trade: React.FC = () => {
    return (
        <NavLayout>
          <div className="bg-lightbg min-h-screen pt-8">
            <div className="flex justify-center w-full px-16 relative mb-14">
              <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
                 <form>
                    <h3 className="text-3xl font-bold text-center mb-7">Trade</h3>
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

   
  <div className="rounded-lg  w-full max-w-4xl p-12 z-20 relative mx-auto "> 
  <div className="flex flex-column justify-between">
      <div className="">
            <p className="text-lg font-bold ">Amount</p>
            
            
        
            <label className="block bg-white py-1 w-full rounded-lg  flex justify-around">
              <input
                type="text"
                placeholder="Amount"
                className=" border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 lg:text-lg sm:text-xs py-2 sm:w-full sm:px-2 "
                name="amountBuy" 
               
              />
              <select value="" className=" border border-cyan-500 rounded-lg lg:text-base sm:text-xs text-cyan-500 p-1 m-1 ">
                <option value="">USDT</option>
                <option value="">BTC</option>
              </select>
            </label>
            <div className="py-2  w-full"></div>
              <button className="rounded bg-[#24B75D]  text-white px-12 py-2  w-full">Buy</button>
              

            
          </div>
          <div>
            
            <p className="text-lg font-bold">Amount</p>

            <label className="block bg-white py-1 w-full rounded-lg  flex justify-around">
            <input
              type="text"
              placeholder="Amount"
              className=" border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 lg:text-lg sm:text-xs py-2 sm:w-full sm:px-2 "
              name="amountSell" 
            />
             <select value="" className=" border border-cyan-500 rounded-lg lg:text-base sm:text-xs text-cyan-500 p-1 m-1 ">
                <option value="">USDT</option>
                <option value="">BTC</option>
              </select>
            </label>
            <div className="py-2  w-full"></div>
              <button className="rounded bg-[#D70000] text-white px-12 py-2  w-full ">sell</button>
          </div>
    
 </div>

           <p className="text-lg py-8 font-bold">Order History</p>
                <table className="bg-white rounded-lg  "> 
                {/* แต่งส่วนตาราง  */}
              
                <thead>
                    <tr className="border-b-2 border-light gray  ">
                        <th className="p-4 px-9">Order ID</th>
                        <th className="p-4 px-9">Date</th>
                        <th className="p-4 px-9">Symbol</th>
                        <th className="p-4 px-9">Type</th>
                        <th className="p-4 px-9">Price</th>
                        <th className="p-4 px-9">Input</th>
                        <th className="p-4 px-9">Output</th>
                    </tr >
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 px-9">#1</td>
                            <td className="p-4 px-9">2/5/2022 10:30</td>
                            <td className="p-4 px-9">BTC_USDT</td>
                            <td className="p-4 px-9">Buy</td>
                            <td className="p-4 px-9">40,000</td>  
                            <td className="p-4 px-9">10,000</td>  
                            <td className="p-4 px-9">0.3</td>  
                          
                        </tr>
                        <tr>
                            <td className="p-4 px-9">#2</td>
                            <td className="p-4 px-9">2/5/2022 10:30</td>
                            <td className="p-4 px-9">BTC_USDT</td>
                            <td className="p-4 px-9">Sell</td>
                            <td className="p-4 px-9">40,000</td>  
                            <td className="p-4 px-9">10,000</td>  
                            <td className="p-4 px-9">0.3</td>  
                          
                        </tr>
                        </tbody>  
                </table>
           
          

 </div>

   

    </div>
    
    
    


        </NavLayout>
    );
}

export default trade;