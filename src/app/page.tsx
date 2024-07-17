'use client';
import Image from "next/image";
import styles from "../page.module.css";
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function SendNumber(e: any){
        e.preventDefault();
    
        const data = {
            Number: (e.target.Number.value)
        }

        if (data.Number > 0){
          findCycle(data.Number)
        }else{
            alert("The number has to be greater than 0")
        }
        
      }

      async function findCycle(Number: number){
        let divide = 1 / Number;
        let obtainCycle = divide.toString().slice(2).split("0")
        if (obtainCycle.length > 2 && obtainCycle[1] == obtainCycle[2]) {
          let cycle = obtainCycle[1].split("")
          alert(cycle.length + 1)
        }else{
          alert(-1)
        }
      }


  return (
      <form onSubmit={SendNumber} className="container col-6 text-center mt-4 bg-light">
        <div>
            <div className="form-group mt-5">
                <div className="form-group mb-3">
                    <label>Integer Number</label>
                    <input type="number" className="form-control" id="Number" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Number</button>
        </div>
    </form>
  );
}
