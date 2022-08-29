fetch('https://fakestoreapi.com/products')
            .then((apidata)=>{
                console.log(apidata);
                return apidata.json();
            })
            .then((actualdata)=>{
                console.log(actualdata)
                const data=actualdata[0].description;
                document.getElementById('descp1').innerHTML=data;
                const data1=actualdata[1].description;
                document.getElementById('descp2').innerHTML=data1;
                const data2=actualdata[2].description;
                document.getElementById('descp3').innerHTML=data2;
                const data3=actualdata[3].description;
                document.getElementById('descp4').innerHTML=data3;
                const data4=actualdata[4].description;
                document.getElementById('descp5').innerHTML=data4;
                const data5=actualdata[5].description;
                document.getElementById('descp6').innerHTML=data5;
                const data6=actualdata[6].description;
                document.getElementById('descp7').innerHTML=data6;
                const data7=actualdata[7].description;
                document.getElementById('descp8').innerHTML=data7;
                const data8=actualdata[8].description;
                document.getElementById('descp9').innerHTML=data8;
                const data9=actualdata[9].description;
                document.getElementById('descp10').innerHTML=data9;
                const data10=actualdata[10].description;
                document.getElementById('descp11').innerHTML=data10;
                const data11=actualdata[11].description;
                document.getElementById('descp12').innerHTML=data11;
            })
            .then((ele)=>{
                
                console.log(ele[0].title);
                
            })
            .catch((error)=>{
                console.log(error);
            })