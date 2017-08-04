import AddTask from '../components/addTaskComponent'
import {connect} from "react-redux";

const AddTaskContainer = connect()(AddTask);
export default AddTaskContainer;