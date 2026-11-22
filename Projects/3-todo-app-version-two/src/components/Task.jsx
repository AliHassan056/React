function Task({ taskName, taskDate }) {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">{taskName}</div>
          <div class="col-4">{taskDate}</div>
          <div class="col-2">
            <button type="button" class="btn-solid theme-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
