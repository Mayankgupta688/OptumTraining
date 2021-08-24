export function IteratingData() {
    var employeeDetails = [{
          "id":"1",
          "createdAt":"2018-12-03T11:37:42.015Z",
          "name":"Ms. Gaylord Streich",
        },  {
          "id":"2",
          "createdAt":"2018-12-02T21:06:49.825Z",
          "name":"Roxanne Kunde",
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

    function isValid(employee) {
        if(employee.avatar) {
            return true
        } 
        return false;
    }

    return (
        <div>
            { employeeDetails.map((employee) => {
                return (
                    <div>
                        <img style={{width: "100px", height: "80px"}} src={employee.avatar} alt={employee.name} title={employee.title} />
                        <h1>Employee Name is: {employee.name}</h1>
                        <h2>Employee Id is {employee.id}</h2>
                        { (employee.id % 2 === 1 && employee.id > 3) && <h3>Employee Id Status: Odd</h3> }
                        { (employee.id % 2 === 0) && <h3>Employee Id Status: Even</h3> }

                        { isValid(employee) && <h4>Employee is Valid</h4>}

                        <h3>Employee Image Url: <a href={employee.avatar}>Image Address</a></h3><br/><hr/>
                    </div>
                )
            })}
        </div>
    )
}