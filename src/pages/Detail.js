import {useParams} from "react-router-dom";
import { useEffect } from "react";

import StyledDetail from "../core-ui/page/Detail.style";
import img from "../assets/cake.jpg";

const Detail = () => {
  // pakai ini untuk cari data di db
  let {id} = useParams();


  return (
    <StyledDetail>
          <img src={img} alt="cake"/>
          <div className="right-section">
                <span>Cake</span>
                <p>Stock: 600</p>
                <ul>
                   <li>White Cake</li>
                   <li>Size:L</li>
                   <li>Tahan 1 hari saja</li>
                </ul>
                <p>
                  Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. 
                  Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. 
                  Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, 
                  Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
                </p>

                <p className="price">Rp. 100.000,00</p>

                <button>Buy</button>
          </div>
    </StyledDetail>

  )
}

export default Detail