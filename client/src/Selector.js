import React from "react";
import "./styles/style.css";

const Selector = ({ properties, anotherprop }) => {
  console.log(properties, "sss");
  console.log(anotherprop, "8787");

  const friends = ["You", "Me", "She", "Him"];

  return (
    <section>
      <div className="filter-container">
        <div classNameName="filter-group">
          <h2>位置</h2>
          {/* style={{ backgroundColor: "#abc" }} */}
          <div className="test">
            <label>
              <input type="checkbox" /> 不限
            </label>
            <label>
              <input type="checkbox" /> 北區
            </label>
            <label>
              <input type="checkbox" /> 東區
            </label>
            <label>
              <input type="checkbox" /> 南區
            </label>
            <label>
              <input type="checkbox" /> 中西區
            </label>
            <label>
              <input type="checkbox" /> 後壁區
            </label>
            <label>
              <input type="checkbox" /> 白河區
            </label>
            <label>
              <input type="checkbox" /> 鹽水區
            </label>
            <label>
              <input type="checkbox" /> 新營區
            </label>
            <label>
              <input type="checkbox" /> 北門區
            </label>
            <label>
              <input type="checkbox" /> 將軍區
            </label>
            <label>
              <input type="checkbox" /> 七股區
            </label>
            <label>
              <input type="checkbox" /> 學甲區
            </label>
            <label>
              <input type="checkbox" /> 下營區
            </label>
            <label>
              <input type="checkbox" /> 麻豆區
            </label>
            <label>
              <input type="checkbox" /> 佳里區
            </label>
            <label>
              <input type="checkbox" /> 西港區
            </label>
            <label>
              <input type="checkbox" /> 安定區
            </label>
            <label>
              <input type="checkbox" /> 安南區
            </label>
            <label>
              <input type="checkbox" /> 柳營區
            </label>
            <label>
              <input type="checkbox" /> 六甲區
            </label>
            <label>
              <input type="checkbox" /> 官田區
            </label>
            <label>
              <input type="checkbox" /> 善化區
            </label>
            <label>
              <input type="checkbox" /> 大內區
            </label>
            <label>
              <input type="checkbox" /> 新市區
            </label>

            <label>
              <input type="checkbox" /> 永康區
            </label>

            <label>
              <input type="checkbox" /> 山上區
            </label>
            <label>
              <input type="checkbox" /> 新化區
            </label>
            <label>
              <input type="checkbox" /> 關廟區
            </label>
            <label>
              <input type="checkbox" /> 安平區
            </label>

            <label>
              <input type="checkbox" /> 仁德區
            </label>
            <label>
              <input type="checkbox" /> 歸仁區
            </label>
            <label>
              <input type="checkbox" /> 東山區
            </label>
            <label>
              <input type="checkbox" /> 玉井區
            </label>
            <label>
              <input type="checkbox" /> 左鎮區
            </label>
            <label>
              <input type="checkbox" /> 龍崎區
            </label>
            <label>
              <input type="checkbox" /> 楠西區
            </label>
            <label>
              <input type="checkbox" /> 南化區
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>類型</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" />
              不限
            </label>
            <label>
              <input type="checkbox" />
              整層住家
            </label>
            <label>
              <input type="checkbox" />
              獨立套房
            </label>
            <label>
              <input type="checkbox" />
              分租套房
            </label>
            <label>
              <input type="checkbox" />
              雅房
            </label>
            <label>
              <input type="checkbox" />
              車位
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>租金</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 5,000元以下
            </label>
            <label>
              <input type="checkbox" /> 5,000-10,000元
            </label>
            <label>
              <input type="checkbox" /> 5,000-10,000元
            </label>
            <label>
              <input type="checkbox" /> 20,000-30,000元
            </label>
            <label>
              <input type="checkbox" /> 30,000-40,000元
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>格局</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 1房
            </label>
            <label>
              <input type="checkbox" /> 2房
            </label>
            <label>
              <input type="checkbox" /> 3房
            </label>
            <label>
              <input type="checkbox" /> 4房
            </label>

            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>特色(離您想要的店家最近的租屋處)</h2>
          <div className="filter-options">
            <label>
              選擇離店家種類:
              <select>
                <option value=""></option>
                <option value="ATM">銀行</option>
                <option value="resturant">餐廳</option>
                <option value="uBike">ubike</option>
                <option value="garbage-truck">垃圾車</option>
              </select>
            </label>
            <label>
              選擇離店家距離:
              <select>
                <option value=""></option>
                <option value="1">小於1km</option>
                <option value="3">小於3km</option>
                <option value="5">小於5km</option>
                <option value="10">小於10km</option>
              </select>
            </label>
            {/* I will modify this*/}
          </div>
        </div>
        <div className="filter-group">
          <h2>型態</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 公寓
            </label>
            <label>
              <input type="checkbox" /> 電梯大樓
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>坪數</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 10坪以下
            </label>
            <label>
              <input type="checkbox" /> 10-20坪
            </label>
            <label>
              <input type="checkbox" /> 20-30坪
            </label>
            <label>
              <input type="checkbox" /> 30-40坪
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>樓層</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 1層
            </label>
            <label>
              <input type="checkbox" /> 2-6層
            </label>
            <label>
              <input type="checkbox" /> 6-12層
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>衛浴</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 1衛
            </label>
            <label>
              <input type="checkbox" /> 2衛
            </label>
            <label>
              <input type="checkbox" /> 3衛
            </label>
            <label>
              <input type="checkbox" /> 4衛以上
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>設備</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 有冷氣
            </label>
            <label>
              <input type="checkbox" /> 有洗衣機
            </label>
            <label>
              <input type="checkbox" /> 有冰箱
            </label>
            <label>
              <input type="checkbox" /> 有洗衣機
            </label>
            <label>
              <input type="checkbox" /> 有熱水器
            </label>
            <label>
              <input type="checkbox" /> 有天然瓦斯
            </label>
            <label>
              <input type="checkbox" /> 有網路
            </label>
            <label>
              <input type="checkbox" /> 床
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>裝潢</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 新裝潢
            </label>
            <label>
              <input type="checkbox" /> 中檔裝潢
            </label>
            <label>
              <input type="checkbox" /> 高檔裝潢
            </label>

            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
        <div className="filter-group">
          <h2>須知</h2>
          <div className="filter-options">
            <label>
              <input type="checkbox" /> 男女皆可
            </label>
            <label>
              <input type="checkbox" /> 限男生
            </label>
            <label>
              <input type="checkbox" /> 限女生
            </label>
            <label>
              <input type="checkbox" /> 排除頂樓加蓋
            </label>
            {/* <!-- Add more options as per the image --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selector;

{
  /* 
// <div
//        classNameNameName=" classNameNamename not  classNameName!!!"
//       style={{ backgroundColor: "paleturquoise" }}
//     >
//       <h1>There are too many ways to express a function....</h1>

//       {friends.map((friend) => {
//         return <p>{friend}</p>;
//       })}
//       <h2>I'm a component from Donotlookatme component</h2>
      
    // </div> */
}
