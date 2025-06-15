import React, { useEffect, useState } from 'react'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
import './Featureinfo.css'
import { userRequest } from '../../Redux/RequestMethod';
export default function Featureinfo() {

  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        // setPerc((res.data[0].total * 100) / res.data[0].total - 100);
        setPerc(((res.data[0].total - res.data[1].total) * 100) / res.data[1].total);

      } catch {}
    };
    getIncome();
  }, []);
  console.log("total income",income)
  console.log("total percent",perc)
  return (
    <div className='featured'>

      <div className="featuredItem">
      <span className="featureTitle">Revanue</span>
      <div className="featureMoneyContainer">
      <span className="featuredMoney">$2,415</span>
      <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
      </div>
      <span className="featuredsub">Compared to last month</span>
      </div>

      <div className="featuredItem">
      <span className="featureTitle">Sales</span>
      <div className="featureMoneyContainer">
      <span className="featuredMoney">$4,415</span>
      <span className="featuredMoneyRate">-21.4 <ArrowDownward className='featuredIcon negative'/></span>
      </div>
      <span className="featuredsub">Compared to last month</span>
      </div>

      <div className="featuredItem">
      <span className="featureTitle">Cost</span>
      <div className="featureMoneyContainer">
      <span className="featuredMoney">$2,415</span>
      <span className="featuredMoneyRate">+10.4 <ArrowUpward className='featuredIcon'/></span>
      </div>
      <span className="featuredsub">Compared to last month</span>
      </div>

    </div>
  )
}
