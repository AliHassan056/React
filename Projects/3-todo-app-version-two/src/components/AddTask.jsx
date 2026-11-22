function AddTaskLayout(){
   return <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Your Task" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="theme-primary btn-solid btn-styled">
              Add
            </button>
          </div>
        </div>
      </div>
}

export default AddTaskLayout;