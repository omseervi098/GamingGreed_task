import Link from "next/link";
// form validation
function helperToShowError(input, message) {
  var error = document.createElement("span");
  error.innerHTML = message;
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.style.fontWeight = "bold";
  if (input.nextSibling == null) {
    input.parentNode.appendChild(error);
  }else{
    input.nextSibling.innerHTML = message;
  }
  //disappear error message after 2.5 seconds
  setTimeout(function () {
    input.parentNode.removeChild(error);
  }, 2500);
}
function validateForm(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var appLink = document.getElementById("app-link").value;
  var monthlyRevenue = document.getElementById("monthly-revenue").value;

  if (name == "") {
    helperToShowError(document.getElementById("name"), "Enter your Name");
    return false;
  }
  if (email == "") {
    helperToShowError(document.getElementById("email"), "Enter your Email");
    return false;
  }
  if (phone == "") {
    helperToShowError(document.getElementById("phone"), "Enter your Phone Number");
    return false;
  }
  if (monthlyRevenue == "") {
    helperToShowError(document.getElementById("monthly-revenue"), "Enter your Monthly Revenue");
    return false;
  }
  //Validation for email
  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!emailRegex.test(email)) {
    helperToShowError(document.getElementById("email"), "Enter a valid Email");
    return false;
  }
 if(phone.length<= 10){
    helperToShowError(document.getElementById("phone"), "Enter a valid Phone Number with country code");
    return false;
  }
  //Validation for number with 91 country code
  var phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    helperToShowError(document.getElementById("phone"), "Enter a valid Phone Number with country code");
    return false;
  }
  
  //Validation for monthly revenue
  var monthlyRevenueRegex = /^[0-9]+$/;
  if (!monthlyRevenueRegex.test(monthlyRevenue)) {
    helperToShowError(document.getElementById("monthly-revenue"), "Enter a valid Monthly Revenue");
    return false;
  }

  return true;
}
function LeadCaptureform() {
  return (
    <div className="lead-capture-form" id="form">
      <form onSubmit={validateForm} action="#">
        <div className="name-email">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Full Name"
            ></input>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Address"
            ></input>
          </div>
        </div>
        <div className="phone">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your Phone Number with country code"
        ></input>
        </div>
        <div className="company-website">
        <label htmlFor="app-link">
          App/Website Link <span>(optional)</span>
        </label>
        <input
          type="text"
          id="app-link"
          placeholder="Enter your App/Website you wish to monetise"
        ></input>
        </div>
        <div className="revenue">
        <label htmlFor="monthly-revenue">Monthly Revenue (USD)</label>
        <input
          type="text"
          id="monthly-revenue"
          placeholder="Enter your Average monthly Revenue in USD"
        ></input>
        </div>
        <input type="submit" id="submit-btn" value="Get Started"></input>
        <p>
          By signing up,you agree to our <Link href="#" className="link">Terms</Link> and{" "}
          <Link href="#" className="link">Privacy Policy</Link>
        </p>
      </form>
    </div>
  );
}
export default LeadCaptureform;
