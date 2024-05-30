import React from "react";
import "./styles/style.css";

const Selector = ({ properties, anotherprop }) => {
  console.log(properties, "sss");
  console.log(anotherprop, "8787");

  const friends = ["You", "Me", "She", "Him"];

  return (
    <div className="vue-filter-container">
      <section className="vue-filter-location">
        <strong className="vue-filter-title">位置</strong>
        <ul className="vue-filter-content">
          <li
            data-gtm-stat="新版租屋列表頁_篩選_按鄉鎮選擇"
            className="location-item active"
          >
            按鄉鎮
            <i className="fa fa-angle-down"></i>
          </li>
          <li
            data-gtm-stat="新版租屋列表頁_篩選_按學校選擇"
            className="location-item"
          >
            按學校
            <i className="fa fa-angle-down"></i>
          </li>
          <li
            data-gtm-stat="新版租屋列表頁_篩選_按商圈選擇"
            className="location-item"
          >
            按商圈
            <i className="fa fa-angle-down"></i>
          </li>
          <li className="clear-history">
            <section className="vue-filter-history">
              <div className="history-title"></div>
            </section>
          </li>
        </ul>
        <ul className="town-list clearfix">
          <li className="vue-filter-item item-unlimited active">不限</li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>永康區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>安南區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>東區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>北區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>南區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>中西區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>仁德區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>新營區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>安平區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>歸仁區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>佳里區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>善化區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>麻豆區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>新化區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>新市區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>關廟區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>安定區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>白河區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>西港區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>學甲區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>鹽水區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>下營區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>後壁區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>六甲區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>七股區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>官田區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>柳營區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>東山區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>將軍區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>玉井區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>北門區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>大內區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>楠西區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>南化區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>山上區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>左鎮區
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>龍崎區
          </li>
        </ul>
      </section>
      <section className="vue-filter-list-item">
        <strong className="vue-filter-title1">類型</strong>
        <ul className="vue-filter-content">
          <li className="vue-filter-item active item-unlimited">不限</li>
          <li className="vue-filter-item">整層住家</li>
          <li className="vue-filter-item">獨立套房</li>
          <li className="vue-filter-item">分租套房</li>
          <li className="vue-filter-item">雅房</li>
          <li className="vue-filter-item">車位</li>
          <li className="vue-filter-item">其他</li>
        </ul>
      </section>
      <section className="vue-filter-list-item">
        <strong className="vue-filter-title">租金</strong>
        <ul className="vue-filter-content">
          <li className="vue-filter-item active item-unlimited">不限</li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>5000元以下
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>5000-10000元
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>10000-20000元
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>20000-30000元
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>30000-40000元
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>40000元以上
          </li>
          <li className="filter-item-input">
            <div className="vue-filter-list-input">
              <input type="text" className="filter-custom-input" />
              <span> - </span>
              <input type="text" className="filter-custom-input" />
              <span>元</span>
              <button>確定</button>
            </div>
          </li>
        </ul>
      </section>
      <section className="vue-filter-list-item">
        <strong className="vue-filter-title">更多條件</strong>
        <ul className="vue-filter-content">
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>可養寵物
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>有車位
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>近捷運
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>可開伙
          </li>
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>可短期租賃
          </li>
        </ul>
      </section>

      <section className="vue-filter-list-item">
        <strong className="vue-filter-title">特製化功能</strong>
        <ul className="vue-filter-content">
          <li className="vue-filter-item">
            <i className="fa fa-check"></i>選店家找租屋
          </li>
          <form>
            <div className="store">
              <i className="fa fa-check"></i>店家種類
              <select name="select" class="select">
                <option value=""></option>
                <option value="A">便利商店</option>
                <option value="A-">咖啡廳</option>
                <option value="B+">全聯</option>
              </select>
              <i className="fa fa-check"></i>距離
              <select name="select" class="select">
                <option value=""></option>
                <option value="A">1</option>
                <option value="A-">3</option>
                <option value="B+">5</option>
              </select>
            </div>
          </form>
          <li className="vue-filter-item"></li>
        </ul>
      </section>
    </div>
  );
};

export default Selector;

{
  /* 
// <div
//        classNameName=" classNamename not  className!!!"
//       style={{ backgroundColor: "paleturquoise" }}
//     >
//       <h1>There are too many ways to express a function....</h1>

//       {friends.map((friend) => {
//         return <p>{friend}</p>;
//       })}
//       <h2>I'm a component from Donotlookatme component</h2>
      
    // </div> */
}
