function ExampleTask(){
   let things = ['Milk' , 'Orange' , 'Gym', 'Reading','Playing','Dancing','Praying'];
   let randomThing = Math.round(Math.random() * 7);

   return <div class="container text-center">
        <div class="row">
          <div class="col-6">
           {things[randomThing]}
          </div>
          <div class="col-4">
            2026-10-12
          </div>
          <div class="col-2">
            <button type="button" class="btn-solid theme-danger">Delete</button>
          </div>
        </div>
      </div>
}

export default ExampleTask;