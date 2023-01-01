import React from 'react';


export default function Main() {
  return (
    <>
      <div style={{ backgroundColor: "#ECFDF5", padding: "4rem 10rem" }}>
        <form style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gridTemplateRows:"repeat(3, 1fr)", columnGap:"1rem", rowGap:"1.5rem", backgroundColor: "#6FE6B7", padding: "1rem", borderRadius: "1%/5%" }}>
          <div style={{ gridRow: "1/2", gridColumn: "1/5"} }>
            <h1 style={{ fontSize: "40px", textAlign:"center" }}>Create Cookie Stand</h1>
          </div>

          <div style={{ gridRow:"2/3", gridColumn:"1/5" }} class="form-group">
            <label for="location">Location</label>
            <input type="text" class="form-control" id="location"placeholder="Enter location" />
          </div>

          <div style={{ gridRow:"3/4", gridColumn:"1/2"}} class="form-group">
            <label for="minimum_customers_per_hour">Minimum Customers Per Hour</label>
            <input type="number" class="form-control" id="minimum_customers_per_hour" />
          </div>

          <div style={{ gridRow: "3/4", gridColumn: "2/3" }} class="form-group">
            <label for="maximum_customers_per_hour">Maximum Customers Per Hour</label>
            <input type="number" class="form-control" id="maximum_customers_per_hour" />
          </div>

          <div style={{ gridRow: "3/4", gridColumn: "3/4" }} class="form-group">
            <label for="average_cookies_per_sale">Average Cookies Per Sale</label>
            <input type="number" class="form-control" id="average_cookies_per_sale" />
          </div>

          <button type="submit" style={{ gridRow: "3/4", gridColumn: "4/5", backgroundColor:"#15B981", fontSize:"30px"} }>Create</button>
        </form>
      </div>
    </>
  )
};


