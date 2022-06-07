import { useState } from "react";
import axios from "axios";
import Topbar from "../components/Topbar";
import NavLayout from "../layouts/NavLayout";


const MarketDiff = () => {

    
    const [token1, setToken1] = useState<any>(""); //ประกาศตัวแปร 
    const [token2, setToken2] = useState<any>("");
    const [allData, setAllData] = useState<any>([]);
    const [display, setDisplay] = useState<any>(0);

    const getApi = async (e: React.FormEvent) => {
        e.preventDefault()
        const url = `https://api1.binance.com/api/v3/avgPrice?symbol=${token1}${token2}`;
        // ดึงข้อมูลจาก api 
        const resBinance = await fetch(url); //ประกาศเพื่อดึงค่า
        const Binance = await resBinance.json(); //เปลี่ยน data เป็น json
        const priceBinance: number = Binance.price; //ค่าที่ดึงมา ดึงprice

        const url2 = await axios.get('./api/FTX', {
            params: { token1, token2 }
        })
        const priceFTX: number = url2.data.result.price;

        const cal = ((Math.abs(priceFTX - priceBinance) / priceFTX) * 100);
        const diff = cal.toFixed(3) //คำนวณ BTC Diff

        const sumData:any = { token1, token2, priceFTX, priceBinance, diff }

        await allData.push(sumData);

        setAllData(allData.sort((update : any, old : any) => (update.token1 > old.token1) ? 1 : -1)); //เรียงเก่าไปใหม่

        setDisplay(display + 1); // เปลี่ยนค่าดิสเพลจาก0เป็น1
    }

    const delData = (id:number) => { //ดึงไอดีมา
        allData.splice(id,1); // ลบข้อมูลจาก id 
        allData.sort((a:any,b:any) => (a.token1 > b.token1)? 1:-1 ) //เรียงใหม่หลังจากลบ
        setDisplay(display+1); //แสดง
  
    }

    const Show = () => {
        return (
            <div>
                <h2  className="text-left text-3xl font-bold" >List</h2>
                <div>
                <table className="bg-white rounded-t-lg rounded-b-lg border-2 border-light gray  border-cyan-300"> 
                {/* แต่งส่วนตาราง  */}
                <thead>
                    <tr className="border-b-2 border-light gray ">
                        <th className="p-4">Token1</th>
                        <th className="p-4">Token2</th>
                        <th className="p-4">Binance</th>
                        <th className="p-4">FTX</th>
                        <th className="p-4">Diff</th>
                        <th className="p-4">Action</th>
                    </tr>
                    </thead>
                    {allData.map((value : any, id : any) => ( 
                        <tr key={id}>
                            <td className="p-4">{value.token1}</td>
                            <td className="p-4">{value.token2}</td>
                            <td className="p-4">{value.priceBinance}</td>
                            <td className="p-4">{value.priceFTX}</td>
                            <td className="p-4">{value.diff}%</td>  
                            
                            <td>
                                <button className="bg-red-600 text-white py-2 px-4 rounded" type="submit" onClick={() => delData(id)} > Delete </button>
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
              <div className="rounded-lg shadow-lg w-full max-w-4xl p-12 bg-white z-20 relative">
                 <form>    
                    <h3 className="text-3xl font-bold text-center mb-7">Market Diff</h3>
                       <div className="flex justify-center mb-5 space-x-12">
          
                             {/* <p className="text-lg">Token 1</p> */}
                             <div style={{ margin: "10px" }}>
                             <p className="text-lg font-bold">Token 1</p>
                               <input //ใส่input
                                  type="text"
                                  id="token1"
                                  name="token1"
                                  placeholder="Fill in token"
                                  className="p-2 rounded shadow w-full"
                                  onChange={(e) => setToken1(e.target.value)}
                          
                                />
                              </div>      

                              {/* <p className="text-lg">Token 2</p>      */}
                              <div style={{ margin: "10px" }}>
                              <p className="text-lg font-bold">Token 2</p>
                                <input
                                   type="text"
                                   id="token2"
                                   name="token2"
                                   placeholder="Fill in token"
                                   className="p-2 rounded shadow w-full"              
                                   onChange={(e) => setToken2(e.target.value)} //ใส่ข้อมูลเสร็จแล้วถึงเปลี่ยน
                                />
                                            
                              </div>
                        </div>
         
                    <div style={{ margin: "10px" }} className="flex justify-center">
                    <input 
                        type="submit" 
                        value="Fetch" 
                        className="rounded bg-darkbg text-white px-12 py-4 " 
                        onClick={getApi}>
                    </input>
             </div>
         </form>
</div> 
 
      <div className="bg-darkbg h-full w-full absolute -top-20" />
</div>
      <div className="flex w-full px-16">
      <div className="flex justify-center w-full  ">{display > 0 && <Show />}</div>
</div>
</div>

        </NavLayout>
        
    );
};

export default MarketDiff;