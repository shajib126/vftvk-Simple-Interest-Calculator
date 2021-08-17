function compute() {
	var principal = document.getElementById("principal").value;
	var rate = parseFloat(document.getElementById("rate").value);

	var years = document.getElementById("years").value;
	var interest = (principal * years * rate) / 100;
	var year = new Date().getFullYear() + parseInt(years);
	document.getElementById("result").innerText = `if you deposit ${principal} 
     at an interest rate of ${rate}%
     You will receive an amoun of ${interest}
     in the year of ${year}
     `;
}

function updateRate() {
	var rateval = parseFloat(document.getElementById("rate").value);

	document.getElementById("rate_val").innerText = rateval + "%";
}
