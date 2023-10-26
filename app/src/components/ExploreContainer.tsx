import "./ExploreContainer.css";

const env = import.meta.env.VITE_API_BACKEND_URL_BASE;

interface ContainerProps {
  name: string;
}

// dotenv.config();

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{env ? env : "no hay variable de entorno"}</strong>
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
