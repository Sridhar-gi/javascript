let calculate = () => {
    let input = document.getElementById("date");
  
  
    let birth = new Date(input.value);
    let d = birth.getDate();
    let m = birth.getMonth() + 1;
    let y = birth.getFullYear();
  
    let current_date = new Date();
    let d1 = current_date.getDate();
    let m1 = current_date.getMonth() + 1;
    let y1 = current_date.getFullYear();
    let d3, m3, y3;
    
  
    if (d <= d1) {
      d3 = d1 - d;
    } else {
      d3 = 30 - d + d1;
      m1 -= 1;
    }
  
    if(m <= m1) {
      m3 = m1 - m;
    } 
  
    else {
      m3 = 12 - m + m1;
      y1 -= 1;
    }
  
    y3 = y1 - y;
  
    document.getElementById("year").innerHTML =`Year ${y3}` ;
    document.getElementById("month").innerHTML =`Month ${m3}`;
    document.getElementById("day").innerHTML = `Days ${d3}`;
    document.getElementById("content").style.display="block";
  };
  