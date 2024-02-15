const courses = ["Unity", "Python", "React", "PHP"];
export const HomePage = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "20px",
      }}
    >
      <img src="https://i9.photo.2gis.com/images/branch/0/30258560117389455_3e0e.jpg" />

      <h1>Courses</h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {courses.map((course) => (
          <article
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#c2a8c2",
            }}
            key={course}
          >
            {course}
          </article>
        ))}
      </section>
    </section>
  );
};
