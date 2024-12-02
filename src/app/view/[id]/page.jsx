"use client"
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';



//서버컴포넌트 : 데이터를 가져오는데만 사용 (useState, useEffect 사용 불가)
function Page({params}) {
  const MAKEUP_API_BASE_URL = process.env.NEXT_PUBLIC_MAKEUP_API_BASE_URL;
  const [item ,setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null); //에러상태
 
  // const param = await params;
  // const id = param.id;
  
  //const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  useEffect(() =>{
    const fetchData = async () =>{
      try {
        setLoading(true);//로딩시작
        // const response = await axios.get(API_URL);
        // const item = response.data;
        const {id} = await Promise.resolve(params);
        //const API_URL = `${NEXT_PUBLIC_MAKEUP_API_BASE_URL}/v1/products/${id}.json`;
        const API_URL = `${MAKEUP_API_BASE_URL}/v1/products/${id}.json`;
        console.log (API_URL);
        //데이터 가져오기
        const response = await axios.get(API_URL);
        setItem(response.data);
        // console.log(item);
        // return <Item item={item} />;
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError("Failed to fetch product data.");
        // return <div>Error</div>;
      } finally{
        setLoading(false); //로딩 종료
      }
    }

    fetchData();
  },[params, MAKEUP_API_BASE_URL]);
  
  //로딩 중
  if(loading){
    return <div style={{ textAlign : "center", padding : "20px"}}>Loading...</div>
  }

  //에러 발생 시
  if(error){
    return (
       <div style={{ textAlign : "center", padding : "20px", color : "red"}}>
          <h2>Error</h2>
          <p>{error}</p>
       </div>   
    );
  }
  // 코딩 완료 후
  return (
  <div className='wrap'>
    <div className='img_itemimg'>
        <img src={item.image_link} alt={item.name} width={300} height={300} />
    </div>
    <div className='info_item'>
        <strong className='tit_item'>{item.name}</strong> 
        <strong className='num_price'>${item.price}</strong> 
        <span className='txt_info'> 
            {item.category ? `${item.category}/` :""}{item.product_type}
        </span>  
        <Button variant='contained' color='success'>구매하기</Button>
        <Button variant='contained' color='error'>취소하기</Button>
    </div>
    <div className='disWrap'> 
        <hr />
        <h1 style={{margin:"20px"}}>Description</h1>
        <div style={{paddingBottom :"20px", fontSize:"24px"}}>{item.description}</div>
    </div>
  </div>
  );
}

export default Page;