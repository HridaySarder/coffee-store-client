/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

const handleDelete = _id => {
  console.log(_id);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
    
    fetch(`http://localhost:5000/coffee/${_id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log('data',data);
      if(data.deletedCount > 0){
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        const remaining = coffees.filter(cof => cof._id !== _id)
        setCoffees(remaining)
      }
     
    })
  }
  })
}
  return (
    <div className="m-5 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex justify-between w-full pr-4">
         <div className="">
         <h1 className="text-5xl font-bold">Name:{name}</h1>
          <p className="py-6">Quantity:{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
          <p>{category}</p>
          <p>{details}</p>
         </div>
          <div className="btn-group btn-group-vertical space-y-5">
            <button className="btn">View</button>
            <Link to={`/updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
            </Link>
            <button
            onClick={() => handleDelete(_id)}
            className="btn bg-orange-500">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
