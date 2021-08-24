export function EmployeeDetails() {
    var employeeDetails = [{
        "id":"1",
        "createdAt":"2018-12-03T11:37:42.015Z",
        "name":"Ms. Gaylord Streich",
        "avatar":"https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg"
      },  {
        "id":"2",
        "createdAt":"2018-12-02T21:06:49.825Z",
        "name":"Roxanne Kunde",
        "avatar":"https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg"
      }, {
        "id":"3",
        "createdAt":"2018-12-03T03:37:39.995Z",
        "name":"Dante Spencer",
        "avatar":"https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg"
      }, {
        "id":"4",
        "createdAt":"2018-12-03T11:07:34.261Z",
        "name":"Benny Hartmann",
        "avatar":"https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg"
      }, {
        "id":"5",
        "createdAt":"2018-12-03T11:38:36.583Z",
        "name":"Easton Fisher",
        "avatar":"https://www.achievers.com/blog/wp-content/uploads/2020/05/05-27-20.jpg"
      }
    ]

    function deleteEmployee() {
        employeeDetails = employeeDetails.filter((emp) => {
            return +emp.id !== 1;
        })
        debugger;
    }

    function getCount() {
        alert("Employee Length" + employeeDetails.length)
    }



    return (
        <div style={{"display": "inline"}}>
            { employeeDetails.map((employee) => {
                return (
                    <div className="card" style={{"width": "18rem", display: "inline-block", margin: "10px"}} key={employee.id}>
                        <img src={employee.avatar} className="card-img-top" alt={employee.name} />
                        <div className="card-body">
                            <h5 className="card-title">{employee.name}</h5>
                            <p className="card-text">{employee.id} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <input type="button" href={employee.avatar} className="btn btn-primary" value="Delete" onClick={deleteEmployee} />
                        </div>
                    </div>
                )
            })}<br/><br/>

            <input type="button" value="Get Employee Count" onClick={getCount} />
        </div>
    )
}