import React, { useEffect, useState, createRef, useRef } from "react";

// import styles from "./styles.module.css";

import Topbar from "../components/Topbar";
import NavLayout from "../layouts/NavLayout";


const chart: React.FC = () => {
    return (
        <NavLayout>
        Chart
        </NavLayout>
    );
}

export default chart

// import React, { useEffect, useState, createRef, useRef } from "react";
// import axios from "axios";
// import dayjs from 'dayjs';
// import styles from "./styles.module.css";
// import { createChart } from 'lightweight-charts';

// const chart: React.FC = () => {
//     const [token1, setToken1] = useState("");
//     const [token2, setToken2] = useState("");
//     const [allData, setAllData] = useState([]);
//     const [display, setDisplay] = useState(0);

//     const getApi = async (e: React.FormEvent) => {
//         e.preventDefault()
//         const url = https://api1.binance.com/api/v3/klines?interval=1h&symbol=${token1}${token2};
//         const resBinance = await fetch(url);
//         const Binance = await resBinance.json();     
//             const object = {};
//             Binance.map((item : any)=>{
//               const newobject ={
//                 open :item[1],
//                 hight : item[2],
//                 low : item[3],
//                 close : item[4]
//               };
//               const formatdate = dayjs(item[0]).format("YYYY-MM-DD");
//               Object.assign(object,{[formatdate]:newobject});
//             });
//         console.log(object);

//     }



//     const Show = () => {
//         return (
//             <div>

//             </div>
//         );
//     };
//     return (
//         <>
//             <div>
//                 <div style={{ margin: "10px" }}>
//                     <a href="/marketdiff">Market Diff</a>
//                 </div>
//                 <div style={{ margin: "10px" }}>
//                     <a href='/chart'>chart</a>
//                 </div>
//                 <div style={{ margin: "10px" }}>
//                     <a href='/trade'>trade</a>
//                 </div>

//             </div>
//             <h1>Chart</h1>
//             <div>
//                 <form>
//                     <label>Token 1 </label>
//                     <div style={{ margin: "10px" }}>
//                         <input type="text" id="token1" name="token1" onChange={(e) => setToken1(e.target.value)} />
//                     </div>
//                     <label>Token 2 </label>
//                     <div style={{ margin: "10px" }}>
//                         <input type="text" id="token2" name="token2" onChange={(e) => setToken2(e.target.value)} />
//                     </div>
//                     <div style={{ margin: "10px" }}>
//                         <input type="submit" value="Fetch" onClick={getApi}></input>
//                     </div>
//                 </form>
//                 <div>{display > 0 && <Show />}</div>
//             </div>
//         </>
//     );
// };


// export default chart