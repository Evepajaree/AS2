// import Link from "next/link";
import { useState } from "react";
import axios from "axios";
// import MarketDiffForm from "../components/MarketDiffForm";
// import MarketDiffList from "../components/MarketDiffList";
import Topbar from "../components/Topbar";
import NavLayout from "../layouts/NavLayout";


const MarketDiff = () => {

    
    const [token1, setToken1] = useState("");
    const [token2, setToken2] = useState("");
    const [allData, setAllData] = useState([]);
    const [display, setDisplay] = useState(0);

    const getApi = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = `https://api1.binance.com/api/v3/avgPrice?symbol=${token1}${token2}`;
        const resBinance = await fetch(url);
        const Binance = await resBinance.json();
        const priceBinance: number = Binance.price;

        const url2 = await axios.get('./api/FTX', {
            params: { token1, token2 }
        })
        const priceFTX: number = url2.data.result.price;

        const cal = ((Math.abs(priceFTX - priceBinance) / priceFTX) * 100);
        const diff = cal.toFixed(3)

        const sumData:any = { token1, token2, priceFTX, priceBinance, diff }

        await allData.push(sumData);

        setAllData(allData.sort((update, old) => (update.token1 > old.token1) ? 1 : -1));

        setDisplay(display + 1);
    }

    const delData = (id:number) => {
        allData.splice(id,1);
        allData.sort((a,b) => (a.token1 > b.token1)? 1:-1 ) 
        setDisplay(display+1);
  
    }

    const Show = () => {
        return (
            <div>
                <h2  className="text-left text-3xl font-bold" >List</h2>
                <div>
                <table className="bg-white rounded-t-lg rounded-b-lg">
                <thead>
                    <tr>
                        <th className="p-4">Token1</th>
                        <th className="p-4">Token2</th>
                        <th className="p-4">Binance</th>
                        <th className="p-4">FTX</th>
                        <th className="p-4">Diff</th>
                        <th className="p-4">Action</th>
                    </tr>
                    </thead>
                    {allData.map((value, id) => (
                        <tr key={id}>
                            <td className="p-4">{value.token1}</td>
                            <td className="p-4">{value.token2}</td>
                            <td className="p-4">{value.priceBinance}</td>
                            <td className="p-4">{value.priceFTX}</td>
                            <td className="p-4">{value.diff}%</td>
                            <td>
                                <button type="submit" onClick={delData} > Delete </button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            </div>
        );
    };
    return (
        <NavLayout>

<div className="bg-lightbg min-h-screen">
        <div className="flex justify-center w-full px-16 relative mb-14">
          {/* <MarketDiffForm /> */}
          <div className="bg-darkbg h-full w-full absolute -top-20" />
        </div>
        <div className="flex w-full px-16">
          {/* <MarketDiffList /> */}
        </div>
      </div>
        
            
<div >
 <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
  <form>         
      <h3 className="text-3xl font-bold text-center mb-7">Market Diff</h3>
         <div className="flex justify-center mb-5 space-x-12">
          <div>
            <p className="text-lg">Token 1</p>
            <input
              type="text"
              id="token1"
              name="token1"
              onChange={(e) => setToken1(e.target.value)}
              placeholder="Fill in token"
              className="p-2 rounded shadow w-full"
            />
          </div>                    
          <div>
            <p className="text-lg">Token 2</p>
            <input
              type="text"
              id="token2"
              name="token2"
              onChange={(e) => setToken2(e.target.value)}
              placeholder="Fill in token"
              className="p-2 rounded shadow w-full"
            />
            </div>                   
          </div>

          <div className="flex justify-center">
            <button className="rounded bg-darkbg text-white px-12 py-4 ">
                <input type="submit" value="Fetch" onClick={getApi}></input>
            </button>
          </div>                 
   </form>
  </div>
                <div>{display > 0 && <Show />}</div>
            </div>

        </NavLayout>
        
    );
};

export default MarketDiff;