function ValidateLogin()
{
	var UserName = document.getElementById("uname").value;
	var Password = document.getElementById("psw").value;
	if(UserName != "admin" || Password != "admin")
	{
		alert("Invalid UserName or Password");
		document.getElementById("uname").value = "";
		document.getElementById("psw").value = "";
		return false;
	}
	return true;
}

//Tableau Embed function
function initViz() {
  url = "https://public.tableau.com/views/WalmartKPI/LoginPage?:language=en-US&:display_count=n&:origin=viz_share_link",
  options = {
      hideToolbar: true,
      width: "100%",
      height: "100%",
  };
  viz = new tableau.Viz(tabMonthlySales, url, options);
}

