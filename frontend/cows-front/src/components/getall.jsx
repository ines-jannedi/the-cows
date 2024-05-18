import "../App.css";

function HomePage(props) {
  const handelname = (e) => {
    props.setName(e.target.value);
  };

  const handeldescription = (e) => {
    props.setDescription(e.target.value);
  };

  const handelage = (e) => {
    props.setAge(e.target.value);
  };

  return (
    <div>
      <div className="insertion">
        <input
          value={props.name}
          onChange={handelname}
          className="inputname"
          placeholder="name of the cow ..."
        />
        <input
          value={props.age}
          onChange={handelage}
          className="inputage"
          type="Number"
          placeholder="age of the cow"
        />
        <textarea
          value={props.description}
          onChange={handeldescription}
          className="textarea"
          placeholder="description of the cow ..."
        ></textarea>
        <button onClick={props.add} className="btn">
          ADD
        </button>
        <button onClick={props.updatefunction} className="btnu">
          update
        </button>
      </div>

      {props.donnee.map((element, index) => {
        return (
          <div>
            <div key={index} className="border">
              <span onClick={()=>{props.handelupdate(element)}} className="pencil">✎</span>
              <span
                onClick={()=>{props.deletefunction(element.id)}}
                className="trash"
              >
                🗑️
              </span>
              <h3>{element.name}</h3>
              <h3>{element.age}</h3>
              <h3>{element.description}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
