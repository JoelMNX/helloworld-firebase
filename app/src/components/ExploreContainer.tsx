import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const env = process.env.REACT_APP_BACKEND_URL_BASE;
  return (
    <div id="container">
      <strong>{env || "no hay variable de entorno"}</strong>
      <p>
        Explore{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
