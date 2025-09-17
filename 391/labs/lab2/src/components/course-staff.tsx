export function CourseStaff() {
    const name = "name";
    const title = "TA";
    const rating = 100;
  
    return (
      <div style={{ backgroundColor: "#0000FF", padding: "10px", margin: "10px" }}>
        <h2>{name}</h2>
        <p>{title}</p>
        <p>Rating: {rating}/100</p>
      </div>
    );
  }
  