// import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import MarketDiffForm from "../components/MarketDiffForm";
import MarketDiffList from "../components/MarketDiffList";
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
                <h2>List1</h2>
                <table>
                    <tr>
                        <th>Token1</th>
                        <th>Token2</th>
                        <th>Binance</th>
                        <th>FTX</th>
                        <th>Diff</th>
                        <th>Action</th>
                    </tr>
                    {allData.map((value, id) => (
                        <tr key={id}>
                            <td>{value.token1}</td>
                            <td>{value.token2}</td>
                            <td>{value.priceBinance}</td>
                            <td>{value.priceFTX}</td>
                            <td>{value.diff}%</td>
                            <td>
                                <button type="submit" onClick={delData} > Del</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    };
    return (
        <NavLayout>

<div className="bg-lightbg min-h-screen">
        <div className="flex justify-center w-full px-16 relative mb-14">
          <MarketDiffForm />
          <div className="bg-darkbg h-full w-full absolute -top-20" />
        </div>
        <div className="flex w-full px-16">
          <MarketDiffList />
        </div>
      </div>
        
            <h1>Market Diff</h1>
            <div>
                <form>
                    <label>Token 1 </label>
                    <div style={{ margin: "10px" }}>
                        <input type="text" id="token1" name="token1" onChange={(e) => setToken1(e.target.value)} />
                    </div>
                    <label>Token 2 </label>
                    <div style={{ margin: "10px" }}>
                        <input type="text" id="token2" name="token2" onChange={(e) => setToken2(e.target.value)} />
                    </div>
                    <div style={{ margin: "10px" }}>
                        <input type="submit" value="Fetch" onClick={getApi}></input>
                    </div>
                </form>
                <div>{display > 0 && <Show />}</div>
            </div>

        </NavLayout>
        
    );
};

export default MarketDiff;