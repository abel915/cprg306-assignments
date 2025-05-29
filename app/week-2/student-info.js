import Link from "next/link";

const StudentInfo = () => {
  return (
    <div>
      <h2>My Name is abel</h2>
      <p>
        Check out my GitHub repository:
        <Link
          href="https://github.com/abel915/cprg306-assignments"
          target="_blank"
        >
          My GitHub
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
