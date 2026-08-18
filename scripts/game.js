const true_ans = [
	"h", "he", "li", "be", "b", "c", "n", "o",
	"f", "ne", "na", "mg", "al", "si", "p", "s",
	"cl", "ar", "k", "ca", "sc", "ti", "v", "cr",
	"mn", "fe", "co", "ni", "cu", "zn", "ga", "ge",
	"as", "se", "br", "kr", "rb", "sr", "y", "zr", 
	"nb", "mo", "tc", "ru", "rh", "pd", "ag", "cd", 
	"in", "sn", "sb", "te", "i", "xe", "cs", "ba",
	"la", "ce", "pr", "nd", "pm", "sm", "eu", "gd",
	"tb", "dy", "ho", "er", "tm", "yb", "lu", "hf",
	"ta", "w", "re", "os", "ir", "pt", "au", "hg",
	"tl", "pb", "bi", "po", "at", "rn", "fr", "ra",
	"ac", "th", "pa", "u", "np", "pu", "am", "cm",
	"bk", "cf", "es", "fm", "md", "no", "lr", "rf",
	"db", "sg", "bh", "hs", "mt", "ds", "rg", "cn",
	"nh", "fl", "mc", "lv", "ts", "og",
  ];
  const inputs = document.querySelectorAll("input");
  let cnt_win = 0;
  const success = document.getElementById("cnt_good");
  function updatingData(){
	success.textContent = cnt_win;
  }
  for (let v = 0; v < inputs.length; v++) {
	inputs[v].addEventListener("input", function () {
	  if (inputs[v].value.toLowerCase() === true_ans[v]) {
		  if (inputs[v].style.backgroundColor !== "darkgreen") {
			  inputs[v].style.backgroundColor = "darkgreen";
			  cnt_win++;
			  inputs[v].disabled = true;
		  }
	  } else if (inputs[v].value === "") {
		  if (inputs[v].style.backgroundColor !== "lightblue") {
			  inputs[v].style.backgroundColor = "lightblue";
		  }
	  } else {
		  if (inputs[v].style.backgroundColor !== "darkred") {
			  inputs[v].style.backgroundColor = "darkred";
		  }
	  }
	  updatingData();
	});
  }
  