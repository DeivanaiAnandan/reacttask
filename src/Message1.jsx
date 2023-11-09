import { FaCheck,FaTimes } from "react-icons/fa";
function Message({details}) {
    
    return <>
      {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
              <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
              <hr></hr>
              <ul className="fa-ul">
              {details.features.map((feature) => {
                    return <li><span className="fa-li">
                    {feature.available ? <FaCheck /> : <FaTimes />}
                  </span>
                  {feature.name}</li>
                })
              }
                
              </ul>
              <div className="d-grid">
                <a  className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
</>
    
       
       
   
    
}
export default Message;