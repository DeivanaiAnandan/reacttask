// import logo from './logo.svg';
import "./App.css";
import Message from "./Message1.jsx";


function App() {
  const planDetails = [
    {
      plan: "FREE",
      price: "0",
      features: [{
        name: "Single User",
        available : true
      },
      {
        name: "50GB Storage",
        available : true
      },
      {
        name: "Unlimited Public Projects",
        available : true
      },
      {
        name: "Community Access",
        available : true
      },
      {
        name: "Unlimited Private Projects",
        available : false
      },
      {
        name: "Dedicated Phone Support",
        available : false
      },
      {
        name: "Free Subdomain",
        available : false
      },
      {
        name: "Monthly Status Reports",
        available : false
      }

      ]
         },
    {
      plan: "PLUS",
      price: "9",
      features: [{
        name: "5 Users",
        available : true
      },
      {
        name: "50GB Storage",
        available : true
      },
      {
        name: "Unlimited Public Projects",
        available : true
      },
      {
        name: "Community Access",
        available : true
      },
      {
        name: "Unlimited Private Projects",
        available : true
      },
      {
        name: "Dedicated Phone Support",
        available : true
      },
      {
        name: "Free Subdomain",
        available : true
      },
      {
        name: "Monthly Status Reports",
        available : false
      }

      ]
          },
    {
      plan: "PRO",
      price: "49",
      features: [{
        name: "Unlimited Users",
        available : true
      },
      {
        name: "50GB Storage",
        available : true
      },
      {
        name: "Unlimited Public Projects",
        available : true
      },
      {
        name: "Community Access",
        available : true
      },
      {
        name: "Unlimited Private Projects",
        available : true
      },
      {
        name: "Dedicated Phone Support",
        available : true
      },
      {
        name: "Free Subdomain",
        available : true
      },
      {
        name: "Monthly Status Reports",
        available : true
      }

      ]
    }
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {/* <Message details = {planDetails[0]}></Message>
          <Message details = {planDetails[1]}></Message>
          <Message details = {planDetails[2]}></Message> */}
          {
          planDetails.map((detil)=>{
            return <Message details = {detil}></Message>
            
          })
        }
        </div>
      </div>
    </section>
  );
}
export default App;
