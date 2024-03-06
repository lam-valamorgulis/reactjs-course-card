import logo from "./logo.svg";
import "./App.css";

const courses = [
  {
    title: "Course 1",
    description: "Description of Course 2",
    instructor: "Instructor 1",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Course 2",
    description: "Description of Course 2",
    instructor: "Instructor 2",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
  {
    title: "Course 3",
    description: "Description of Course 3",
    instructor: "Instructor 3",
    image: "https://via.placeholder.com/150", // Placeholder image URL
  },
];

const CourseCard = ({ title, description, instructor, image }) => (
  // const formattedInstructors = instructor.map(el => instructor.firstname).join(', ');

  <div className="course-card">
    <img src={image} alt="Course" className="course-image" />
    <div className="course-details">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <p className="instructor">Instructor: {instructor}</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="container">
      <div className="course-card-list">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

export default App;
