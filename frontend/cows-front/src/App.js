import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./components/getall";

function App() {
  const [Data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [age, setAge] = useState("");
  const [index,setIndex] = useState("")

  useEffect(() => {
    axios.get("http://localhost:5000/cows").then((res) => {
      setData(res.data);
    });
  }, [Data]);

  const postfunction = () => {
    axios
      .post("http://localhost:5000/cows", { name, description, age })
      .then((res) => {
        setData([...Data, res.data]);
        setName("");
        setDescription("");
        setAge("");
      });
  };

  const deletefunction = (id) => {
    axios.delete(`http://localhost:5000/cows/${id}`).then((res) => {
      setData(Data.filter((element) => element.id !== id));
    });
  };

  const updatefunction = (id) => {
    axios
      .put(`http://localhost:5000/cows/${id}`, { name, description, age })
      .then((res) => {
        setData(
          Data.map((element) => {
            if (element.id === id) {
              return { ...element, name, description, age };
            } else {
              return element;
            }
          })
        );
        setName("");
        setDescription("");
        setAge("");
      });
  };

  const handelupdate = (element)=>{
    setName(element.name)
    setAge(element.age)
    setDescription(element.description)
    setIndex(element.id)
  }
  return (
    <div className="App">
      <HomePage
        add={postfunction}
        donnee={Data}
        name={name}
        description={description}
        age={age}
        setName={setName}
        setDescription={setDescription}
        setAge={setAge}
        deletefunction={deletefunction}
        updatefunction={()=>{updatefunction(index)}}
        handelupdate={handelupdate}
      />
    </div>
  );
}

export default App;
