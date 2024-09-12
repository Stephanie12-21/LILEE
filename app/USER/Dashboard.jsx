import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='container mx-auto my-10'>
      <h1 className='text-[#263056] text-[30px] font-bold'>Tableau de bord</h1>
      <div className='flex justify-between space-x-5 pt-5'>
        <Card className="w-[370px] h-[200px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <CardContent className="">
            <h1 className='text-[#263056] text-[20px] font-bold'>Annonces</h1>
          </CardContent>
        </Card>
        <Card className="w-[370px] h-[200px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <CardContent>
            <h1 className='text-[#263056] text-[20px] font-bold'>Gains</h1>
          </CardContent>
        </Card>
        <Card className="w-[370px] h-[200px] shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl">
          <CardContent>
            <h1 className='text-[#263056] text-[20px] font-bold'>Transactions</h1>
          </CardContent>
        </Card>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default Dashboard