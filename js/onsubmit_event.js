function click1() {
			var date = document.getElementById("text").value;
			var month = document.getElementById("text1").value;
			var year = document.getElementById("text2").value;
			var date1 = document.getElementById("textc").value;
			var month1 = document.getElementById("textc1").value;
			var year1 = document.getElementById("textc2").value;

			alert(date.value);
			if(date.value=="" || month.value=="" || year.value==""){
				alert("please Enter correct date and wrong input");
			}
			else if(date1.value=="" || month1.value=="" || year1.value==""){
				alert("please Enter correct current date");
			}
			else {
				//alert("succcessfull");
				// var date = Number(datea);
				// var month = Number(monthb);
				// var year = Number(yearc);
				// var date1 = Number(date1d);
				// var month1 = Number(month1e);
				// var year1 = Number(year1f);
				var month = [31,28,31,30,31,30,31,31,30,31,30,31];

				//months for 12months
				if (date.value > date1.value) { 
           		 	month1 = month1.value - 1; 
            		date1 = date1.value + month[month1.value - 1]; 
       		    } 

       		    if (month.value > month1.value) { 
            		year1 = year1.value - 1; 
            		month1 = month1.value + 12; 
       			} 
  
        		// calculate date, month, year 
        		var calculated_date = date1 - date; 
      		    var calculated_month = month1 - month; 
         		var calculated_year = year1 - year;

         		//alert(calculated_date);
			}
		}