import {useState} from 'react'
import '../ChartWeek/chartweek.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {


  const data = [
    {
      name: '1',
      value:2700,
    
    },
    {
        name: '',
        value: 4300,
        
      },
      
    {
      name: '13',
      value: 3500,
      
    },
    {
      name: '19',
      value: 4221,
     
    },
    {
      name: '31',
      value: 3980,
     
    },
    
  ];

  const dataweek = [
    {
      name: 'Tuần 1',
      value:2700,
    
    },
    {
      name: 'Tuần 2',
      value: 3500,
      
    },
    {
      name: 'Tuần 3',
      value: 5800,
      
    },
    {
      name: 'Tuần 4',
      value: 4221,
     
    },
   
    
  ];

  const datamonth = [
    {
      name: '1',
      value:2700,
    
    },
    {
      name: '2',
      value: 4000,
      
    },
    {
      name: '3',
      value: 4700,
      
    },
    {
      name: '4',
      value: 4100,
     
    },
    {
      name: '5',
      value: 3400,
     
    },
    {
      name: '6',
      value: 3700,
     
    },
    {
      name: '7',
      value: 3500,
     
    },
    {
      name: '8',
      value: 4070,
     
    },
    {
      name: '9',
      value: 3900,
     
    },
    {
      name: '10',
      value: 4000,
     
    },
    {
      name: '11',
      value: 4221,
     
    },
    {
      name: '12',
      value: 3800,
     
    },
   
    
  ];


  const [dataChart,setDataChart] = useState(data)

    const options = [
        'Ngày', 'Tuần', 'Tháng'
      ];

      const handleDropdownValue = (e)=>{
            
           if(e.value === 'Ngày'){
             setDataChart(data)

           }else if(e.value === 'Tuần'){
              setDataChart(dataweek)
           }else if(e.value === 'Tháng'){
             setDataChart(datamonth)
           }
            
      }
      const defaultOption = options[0];

     
    return (
        <div className="chart">
            <div className="chartItemFirst">
                <div className="chartItemFirstTitle">
                    <span className="ChartTitle">
                         Bảng thống kê theo tháng
                    </span>
                    <span className="ChartTitleDate">
                        Tháng 11/2021
                    </span>
                </div>

                <div className="chartItemDropdown">
                    <span className="chartDropdownTitle">
                            Xem theo
                    </span>
                    <Dropdown options={options} 
                        className='chartDropdown'
                        onChange={(e)=>handleDropdownValue(e)} 
                        value={defaultOption} placeholder="Select an option" />
                 </div>
                    
            </div>

          <div className="chartItemChart">

            <ResponsiveContainer width="80%" aspect={ 4.5/2.5}>
                <AreaChart
                width={500}
                height={400}
                data={dataChart}
                margin={{
                    top: 10,
                    right: 0,
                    left: 220,
                    bottom: 350,
                }}
                >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#CEDDFF" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#CEDDFF" stopOpacity={0}/>
                    </linearGradient>
                 </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#colorUv)" />
                </AreaChart>
        </ResponsiveContainer>




          </div>
            
        </div>
    )
}