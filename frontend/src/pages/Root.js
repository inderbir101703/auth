import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util';

function RootLayout() {
  const token=useLoaderData()
  const submit=useSubmit()
  // const navigation = useNavigation();
useEffect(()=>{


if(!token)
return

if(token==='EXPIRED')
{submit(null,{action:'/logout',method:'POST'})}

const tokenDuration=getTokenDuration()
console.log(tokenDuration)
setTimeout(()=>{submit(null,{action:'/logout',method:'POST'}) },tokenDuration)

},[token,submit])
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
