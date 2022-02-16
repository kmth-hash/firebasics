import React from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs, query, where,  orderBy, limit } from "firebase/firestore";
import {fireDB} from "../fireconf";


function Homepage() {
  async function testAdd() {
    await addDoc(collection(fireDB, "users"), {
      firstname: "Tokyo",
      lastname: "Drift2",
    });
    console.log("Document Added");
  }

  async function readData() {
    try {
      const userRef = await getDocs(collection(fireDB, "users"));

      userRef.forEach((item) => {
        console.log(item.id);
        console.log(item.data().firstname + " " + item.data().lastname);
      });
    } catch (error) {
      console.log("error : ", error);
    }
  }

  async function testData() {
    var citiesRef = collection(fireDB, "cities");
    const q = query(citiesRef , where("state" , "==" , null),orderBy("name",'desc'),limit(3));
    console.log(q);

    const rs = await getDocs(q);
    rs.forEach((item)=> {
      console.log(item.data().name);
    })
  }

  return (
    <div>
      <Layout>
        <button className="btn btn-primary" onClick={testAdd}>
          Add data
        </button>
        <br />
        <br />
        <button className="btn btn-success" onClick={readData}>
          Read Data
        </button>
        <br />
        <br />
        <button className="btn btn-success" onClick={testData}>
          Custom Test
        </button>
        <br />
        <br />   
        <button className="btn  btn-light">Login with Google</button>     
      </Layout>
    </div>
  );
}

export default Homepage;
