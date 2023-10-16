import Swal from "sweetalert2";

const AddCoffee = () => {

const handleAddCoffee = event => {
  event.preventDefault();

  const form = event.target;

  const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;

const newCoffee = {name,quantity,supplier,taste,category,details,photo}
console.log(newCoffee);

fetch('http://localhost:5000/coffee',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newCoffee)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data.insertedId){
    Swal.fire({
      title: 'Success!',
      text: 'Coffee added successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
})

}

  return (
    <div className="bg-[#F4F3F0] p-24 ">
      <h2 className="font-extrabold">Add a coffee</h2>
      <form onSubmit={handleAddCoffee}>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Coffee name</span>
            <label className="input-group">
              
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Abaliable quantity</span>
            <label className="input-group">
              
              <input
                type="text"
                name="quantity"
                placeholder="Abaliable quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Supplier</span>
            <label className="input-group">
              
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Taste</span>
            <label className="input-group">
              
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
        </div>
        <div className="flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
             
            </label>
            <span>Category</span>
            <label className="input-group">
              
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
             
            </label>
            <span>Details</span>
            <label className="input-group">
              
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
        </div>
        <div className="">
          <div className="form-control md:w-full">
            <label className="label">
             
            </label>
            <span>Photo URL</span>
            <label className="input-group">
              
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
         
         
        </div>
        <input type="submit" value="Add Coffee Details" className="btn btn-block mt-5" />
      </form>
    </div>
  );
};

export default AddCoffee;
