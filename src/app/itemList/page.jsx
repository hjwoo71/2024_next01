"use client"
import { Divider, Grid2 } from '@mui/material';
import './itemList.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

function Page(props) {
  const MAKEUP_API_BASE_URL = process.env.NEXT_PUBLIC_MAKEUP_API_BASE_URL;
  const[list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null); //에러상태
  const API_URL = `${MAKEUP_API_BASE_URL}/v1/products.json?brand=maybelline`;
  //const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = async () => {
   try {
       setLoading(true); // 로딩 시작
       const response = await axios.get(API_URL);
       
       setList(response.data.slice(0,12));
   } catch (err) {
       console.error("Error fetching data:", err);
       setError("Failed to fetch data.");
   } finally {
       setLoading(false); // 로딩 종료
   }
};
  // 최초 한번만 실행
  useEffect(()=>{
     getData();
  },[]) 
   // 로딩 중
   if (loading) {
      return <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>;
   }

   // 에러 발생 시
   if (error) {
      return (
         <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
            <h2>Error:</h2>
            <p>{error}</p>
         </div>
      );
   }
  return (
    <div style={{width: "80%" , margin : "0 auto", padding:"20px"}}>
      <h2>베스트 상품</h2>
      <Divider />
      <Grid2 container spacing={2}>
         { list.map(k=> {
            //size={{xs :3}}  => 전체 12 에 3개를 차지하자 (한줄에 4개)
             return<Grid2 key={k.id} size={{xs :3}} > 
                <Link href={'/view/' + k.id} >
                  <img src={k.image_link} alt="" width={100} height={100} />
                  <strong>{k.name}</strong>
                  <span className='txt_info'>{k.category} &nbsp;&nbsp; {k.product_type}</span>
                  <strong className='num_price'>{k.price}</strong> 
                </Link>
             </Grid2>
         })}
      </Grid2>
    </div>
  );
}

export default Page;