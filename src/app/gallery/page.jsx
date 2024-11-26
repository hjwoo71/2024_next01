import Image from 'next/image';
import React from 'react';
import './gallery.css'
function page(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
               <td><Image src="/images/tree-1.jpg" width={50} height={50}/></td>
                <td><Image src="/images/tree-2.jpg" width={50} height={50}/></td>
                <td><Image src="/images/tree-3.jpg" width={50} height={50}/></td>
           </tr>
          <tr>
              <td><Image src="/images/tree-4.jpg" width={50} height={50}/></td>
              <td><Image src="/images/tree-5.jpg" width={50} height={50}/></td>
              <td><Image src="/images/tree-6.jpg" width={50} height={50}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default page;