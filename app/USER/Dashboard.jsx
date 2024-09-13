
import { Card, CardContent } from '@/components/ui/card';
import { FaBullhorn, FaEuroSign, FaExchangeAlt } from 'react-icons/fa'; 
import React, { useState } from 'react';
import CountUp from 'react-countup'; 
import { BarChart, BarChartUser } from './BarChartUser';


const formatNumber = (num) => {
  if (num >= 1000000) {
   
    return Math.floor(num / 1000000) + 'M';
  } else if (num >= 1000) {
    
    return Math.floor(num / 1000) + 'K';
  }
  return num.toLocaleString(); 
};


const Tooltip = ({ text, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && (
        <div className="absolute bottom-full mb-2 px-3 py-2 bg-gray-700 text-white rounded-md shadow-lg text-sm">
          {text}
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className='py-9'>
      <h1 className='text-[#263056] text-[30px] font-bold'>Tableau de bord</h1>
      <div className='flex justify-between space-x-5 pt-5'>
       
        <Card className="w-[390px] h-[200px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <CardContent className="flex-col pt-5">
            <div className='flex items-start justify-between'>
              <h1 className='text-[#263056] text-[20px] font-bold truncate w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                Annonces
              </h1>
              <FaBullhorn size={40} color="#263056" />
            </div>
            <div className='flex flex-col items-center justify-center pt-5'>
              <Tooltip text="52,222,255">
                <p className='text-2xl font-semibold text-[#263056]'>
                  <CountUp end={52222255} duration={2} formattingFn={formatNumber} />
                </p>
              </Tooltip>
              <p className='pt-5 text-xl font-semibold text-[#263056]'>25%</p>
              <p>depuis la semaine dernière</p>
            </div>
          </CardContent>
        </Card>

      
        <Card className="w-[390px] h-[200px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <CardContent className="flex-col pt-5">
            <div className='flex items-start justify-between'>
              <h1 className='text-[#263056] text-[20px] font-bold truncate w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                Gains
              </h1>
              <FaEuroSign size={40} color="#263056" />
            </div>
            <div className='flex flex-col items-center justify-center pt-5'>
              <Tooltip text="521,478">
                <p className='text-2xl font-semibold text-[#263056]'>
                  <CountUp end={521478} duration={2} formattingFn={formatNumber} />
                </p>
              </Tooltip>
              <p className='pt-5 text-xl font-semibold text-[#263056]'>59%</p>
              <p>depuis la semaine dernière</p>
            </div>
          </CardContent>
        </Card>

        
        <Card className="w-[390px] h-[200px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <CardContent className="flex-col pt-5">
            <div className='flex items-start justify-between'>
              <h1 className='text-[#263056] text-[20px] font-bold truncate w-[200px] overflow-hidden whitespace-nowrap text-ellipsis'>
                Transactions
              </h1>
              <FaExchangeAlt size={40} color="#263056" />
            </div>
            <div className='flex flex-col items-center justify-center pt-5'>
              <Tooltip text="85,496">
                <p className='text-2xl font-semibold text-[#263056]'>
                  <CountUp end={85496} duration={2} formattingFn={formatNumber} />
                </p>
              </Tooltip>
              <p className='pt-5 text-xl font-semibold text-[#263056]'>10%</p>
              <p>depuis la semaine dernière</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className='pt-10'>
        <BarChartUser/>
      </div>
    </div>
  );
};

export default Dashboard;
