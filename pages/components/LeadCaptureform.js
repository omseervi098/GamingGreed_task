import Link from "next/link";
// lead capture form
function LeadCaptureform() {
  return (
    <div className="lead-capture-form">
      <form>
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
