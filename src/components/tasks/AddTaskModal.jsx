// import PropTypes from "prop-types";
import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            name="title"
            id=""
            {...register("title")}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            {" "}
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            name="description"
            id="description"
            {...register("description")}
          />
        </div>

        {/* Date */}
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full rounded-md"
            {...register("date")}
          />
        </div>

        {/* Assign to */}
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            name="assignedTo"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option defaultValue disabled value="select">
              Select
            </option>
            <option defaultValue value="Md Najatul Islam">
              Md Najatul Islam
            </option>
            <option value="Imran Siddik">Imran Siddik</option>
            <option value="Mozibur Rahman">Mozibur Rahman</option>
            <option value="Mahmudul Hasan">Mahmudul Hasan</option>
            <option value="Kholilur Rahman">Kholilur Rahman</option>
            <option value="Lily Begum">Lily Begum</option>
            <option value="Khadija Begum">Khadija Begum</option>
            <option value="Khaleda Begum">Khaleda Begum</option>
          </select>
        </div>

        {/* Priority */}
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            name="priority"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue disabled value="select">
              Select
            </option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end">
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;

// AddTaskModal.propTypes = {
//   isOpen: PropTypes.node,
//   setIsOpen: PropTypes.node,
// };
