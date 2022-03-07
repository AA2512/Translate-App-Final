import React, { useEffect, useState } from "react";

function Results() {
  // useEffect(() => {
  //   fetchItems();
  // }, []);

  // const [items, setItems] = useState([]);

  // const fetchItems = async () => {
  //   const data = await fetch("/tweets");
  //   const items = await data.json();
  //   setItems(items);
  // };

  // return (
  //   <section>
  //     {items.map((item) => (
  //       <div class="container-fluid p-3 w-50">
  //         <div class="card-deck">
  //           <div class="card">
  //             <div class="card-body p-1">
  //               <h6 class="card-title">{item.name}</h6>
  //               <p class="card-text">{item.country}</p>
  //               <p class="card-text">
  //                 <i>by {item.tweet}</i>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </section>
  // );

  return (
    <section className="results-section">
      <div className="results">
        <p style={{ fontWeight: 600 }}>Translated Text</p>
        <div>
          <p className="loading-container"></p>
          <p className="input-lang"></p>
        </div>
      </div>
    </section>
  );
}

export default Results;
