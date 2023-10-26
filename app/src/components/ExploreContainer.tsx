import "./ExploreContainer.css";
import "/home/joel/helloworld-firebase/helloworld-firebase/.github/workflows/firebase-hosting-merge.yml";
const envv = import.meta.env.VITE_API_BACKEND_URL_BASE;
const api = process.env.REACT_APP_API_KEY;
interface ContainerProps {
  name: string;
}

// dotenv.config();

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{envv ? envv : "no hay variable de entorno"}</strong>
      <strong>{api ? api : "no hay variable de api"}</strong>
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
