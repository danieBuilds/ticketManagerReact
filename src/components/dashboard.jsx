// import { useState } from 'react';

// export default function Dashboard() {

//     const [showAddTaskScreen, setShowAddTaskScreen] = useState(false)

//     const [addTickets, setAddTickets] = useState([]);
//     const [taskName, setTaskname] = useState('');
//     const [taskDesc, setTaskDesc] = useState('');
//     const [showFullDetails, setShowFullDetails] = useState(false)






//     function newTicket(formData) {
//         formData.preventDefault();
//         const newTicket = {
//             name: formData.get("ticketName"),
//             desc: formData.get("ticketDesc"),
//             status: "open"
//         };
//         setAddTickets(prevAddTicket => [prevAddTicket, newTicket]);
        
//         setTaskname('');
//         setTaskDesc('');

//         setShowAddTaskScreen(false);
//     }

//     function addTicketBtn() {
//         setShowAddTaskScreen(prevShowAddTaskScreen => !prevShowAddTaskScreen);
//     }

//     function fullDetails() {
//         setShowFullDetails(prevshowFullDetail => !prevshowFullDetail)
//     }

//     function deleteTicket(tobeDeleted) {
//        setAddTickets( prevaddTickets => prevaddTickets.filter(addTicket => addTicket !== tobeDeleted));
//     }



//   return (
//     <>
//         <nav>
//             <div className="nav-logo">
//                 <h1>tickHandler Dashboard</h1>
//             </div>
//             <div className="nav-contents">
//                 <button type="button">
//                     tickets
//                 </button>
//                 <button type="button">
//                     Logout
//                 </button>
//             </div>
//         </nav>
//         <section id="dashboard-main">
//             <div className="dashboard-container">
//                 <h1>Welcome to your Dashboard</h1>
//                 <p>Manage your tickets efficiently and stay organized.</p>
//             </div>
//             <div className="addTicket">
//                 <header>
//                     <h1>Add New Ticket</h1>
//                 </header>
//                 <form onSubmit={newTicket}>
//                     <input type="text" name="ticketName" placeholder="Ticket Title" />
//                     <textarea value={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} name="ticketDesc" placeholder="Ticket Description"></textarea>
//                     <button type="submit">Add Ticket</button>
//                 </form>
//             </div>
//             <div className="showTicket">
//                 <header>
//                     <h1>Edit ticket</h1>
//                 </header>
//                 <div className="ticket-info">
//                     <h2>{}</h2>
//                     <p>{}</p>
//                     <span>Status: {}</span>
//                 </div>
//             </div>

//             <div className="ticket-manager">
//                 <header>
//                     <h1>Tickets</h1>
//                     <button onClick={addTicketBtn} type="button">
//                         + Add Ticket
//                     </button>
//                 </header>
//                 <body>
//                     <div className="sortTickets">
//                         <button>all</button>
//                         <button>open</button>
//                         <button>in progress</button>
//                         <button>closed</button>
//                     </div>
//                     <div className="ticket-cards">
//                         {addTickets.map( addTicket => <div className={ showFullDetails? "fullTicket-card" : "ticket-card"}>
//                             <header>  
//                                 <h2>{taskName}</h2>
//                                 {showFullDetails === true && <p>{taskDesc}</p>}
//                                 <div className="dropdown">
//                                     <button className="dropbtn">⋮</button>
//                                     <div className="dropdown-content">
//                                         <a >Edit</a>
//                                         <a onClick={()=> deleteTicket(ticket)}>Delete</a>
//                                         <a onClick={fullDetails} href="">show Details</a>
//                                     </div>
//                                 </div>
//                             </header>
//                             <div className="status">
//                                 <span>{}</span>
//                             </div>
//                         </div>)}
//                     </div>
//                 </body>
//             </div>
//         </section>
//     </> 
//   )
// }

import { useState } from 'react';
import "../styles/dashboard.css";
import LandingPage from './landingPage';
export default function Dashboard() {
  const [showAddTaskScreen, setShowAddTaskScreen] = useState(false);
  const [addTickets, setAddTickets] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [ticketStatus, setTicketStatus] = useState('');

  function satus(ticket) {
    
  }

  function newTicket(e) {
    e.preventDefault(); // prevent page reload

    const newTicket = {
      name: taskName,
      desc: taskDesc,
      status: ticketStatus
    };

    setAddTickets((prev) => [...prev, newTicket]);
    setTaskName('');
    setTaskDesc('');
    setShowAddTaskScreen(false);
  }

  function addTicketBtn() {
    setShowAddTaskScreen((prev) => !prev);
  }

  function fullDetails() {
    setShowFullDetails((prev) => !prev);
  }

  function deleteTicket(ticketToDelete) {
    setAddTickets((prev) => prev.filter((t) => t !== ticketToDelete));
  }
  function showTicketsSection() {
    setShowTickets(prev => !prev);
    setShowDashboard(prev => !prev);
  }
  function landingPage() {
    window.location.href = "/"
  }
//   function statusLabel({status}) {
//     const statusColors = {
//         open: 'orange',
//         "in progress": 'green',
//         closed: 'red'
//     };
//   }

  return (
    <>
      <nav>
        <div className="nav-logo">
          <h1>tickHandler Dashboard</h1>
        </div>
        <div className="nav-contents">
          <button onClick={showTicketsSection} type="button">{showTickets? "dashbord" : "tickets"}</button>
          <button onClick={landingPage} type="button">Logout</button>
        </div>
      </nav>

      <section id="dashboard-main">
        {showDashboard === true && <div className="dashboard-container">
          <h1>Welcome to your Dashboard</h1>
          <p>Manage your tickets efficiently and stay organized.</p>

          <div className="stats">
            <div className="stat-card">
              <h2>Total Tickets</h2>
              <p>{addTickets.length}</p>
            </div>
            <div className="stat-card">
              <h2>Open Tickets</h2>
              <p>{addTickets.filter(ticket => ticket.status === "open").length}</p>
            </div>
            <div className="stat-card">
                <h2>In Progress Tickets</h2>
                <p>{addTickets.filter(ticket => ticket.status === "in progress").length}</p>
            </div>
            <div className="stat-card">
                <h2>Closed Tickets</h2>
                <p>{addTickets.filter(ticket => ticket.status === "closed").length}</p>
            </div>
          </div>
        </div>}
        {showAddTaskScreen === true && (
          <div className="addTicket">
            <header>
              <h1>Add New Ticket</h1>
            </header>
            <form onSubmit={newTicket}>
              <input
                type="text"
                name="ticketName"
                placeholder="Ticket Title"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              <textarea
                name="ticketDesc"
                placeholder="Ticket Description"
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
              ></textarea>
              <div className="addTicket-status">
                <label>Status:</label>
                <select value={ticketStatus} onChange={(e) => setTicketStatus(e.target.value)}>
                  <option value="open">Open</option>
                    <option value="in progress">In Progress</option>
                    <option value="closed">Closed</option>
                </select>
              </div>
              <button type="submit">Add Ticket</button>
            </form>
          </div>
        )}

        {showTickets === true && <div className="ticket-manager">
          <header>
            <h1>Tickets</h1>
            <button onClick={addTicketBtn} type="button">
              + Add Ticket
            </button>
          </header>

          <div className="sortTickets">
            <button>all</button>
            <button>open</button>
            <button>in progress</button>
            <button>closed</button>
          </div>

          <div className="ticket-cards">
            {addTickets.map((ticket, index) => (
              <div
                key={index}
                className={showFullDetails ? 'fullTicket-card' : 'ticket-card'}
              >
                <header>
                  <h2>{ticket.name}</h2>
                  {showFullDetails && <p>{ticket.desc}</p>}
                  <div className="dropdown">
                    <button className="dropbtn">⋮</button>
                    <div className="dropdown-content">
                      <a>Edit</a>
                      <a onClick={() => deleteTicket(ticket)}>Delete</a>
                      <a onClick={fullDetails}>Show Details</a>
                    </div>
                  </div>
                </header>
                    <div className= {ticket.status === "open" ? "status open" : ticket.status === "in progress" ? "status inprogress" : "status closed"}>
                        <p>Status:</p>
                        <span>{ticket.status}</span>
                    </div>
              </div>
            ))}
          </div>
        </div>}
      </section>
    </>
  );
}