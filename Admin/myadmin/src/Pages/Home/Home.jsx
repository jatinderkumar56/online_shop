import React, { useEffect, useMemo, useState } from 'react'
import './Home.css'
import { Userdata } from '../../Components/Datafile'
import Featureinfo from '../../Components/FeatureInfo/Featureinfo'
import Chart from '../../Components/Chart/Chart'
import WidgetLarge from '../../Components/Widget/WidgetLarge'
import WidgetSmall from '../../Components/Widget/WidgetSmall'
import { userRequest } from '../../Redux/RequestMethod'
export default function Home() {
  const [stats, setstats]= useState([]);
  const MONTHS = useMemo(
    ()=>[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Aug",
      "Oct",
      "Nov",
      "Dec"
    ],
    []
  )
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setstats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  // console.log("stats data",stats)
  return (
    <div className='home'>
      <Featureinfo/>
      <Chart title='User Analytics' datakey='Active User' grid data={Userdata}/>
      <div className="homewidget">
      <WidgetSmall/>
      <WidgetLarge/>
      </div>
    </div>
  )
}
